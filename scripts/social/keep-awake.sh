#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
SCRIPT_NAME="$(basename "$0")"
SCRIPT_PATH="$ROOT_DIR/$SCRIPT_NAME"
PID_FILE="$ROOT_DIR/.keep-awake.pid"
LOG_FILE="$ROOT_DIR/.keep-awake.log"
POWER_LOG="$ROOT_DIR/.keep-awake-power.log"
SUB_PID_FILE="$ROOT_DIR/.keep-awake.sub.pid"
DEFAULT_GUARD_INTERVAL=30

show_help() {
  cat <<'EOF_HELP'
Usage:
  keep-awake.sh start [--minutes <minutes>]                  Start temporary anti-sleep session.
  keep-awake.sh start --battery-min <pct> [--minutes <minutes>] [--interval <seconds>]
                                                               Start anti-sleep only while on AC or battery above pct.
  keep-awake.sh stop                                         Stop active anti-sleep session.
  keep-awake.sh status                                       Show current anti-sleep status.
  keep-awake.sh help                                         Show this help text.

Examples:
  ./scripts/social/keep-awake.sh start --minutes 180
  ./scripts/social/keep-awake.sh start --battery-min 10 --minutes 360
  ./scripts/social/keep-awake.sh start --battery-min 10 --interval 15 --minutes 180
  ./scripts/social/keep-awake.sh status
  ./scripts/social/keep-awake.sh stop
EOF_HELP
}

assert_mac() {
  if [[ "$(uname -s)" != "Darwin" ]]; then
    echo "This helper is macOS-only." >&2
    exit 1
  fi
  if ! command -v caffeinate >/dev/null 2>&1; then
    echo "caffeinate not found. Apple Silicon/Intel macOS is expected." >&2
    exit 1
  fi
}

current_command() {
  if [[ -f "$PID_FILE" ]]; then
    cat "$PID_FILE"
  fi
}

power_state() {
  local source percent
  source="$(pmset -g batt | awk -F"'" 'NR==1 {print $2}')"
  percent="$(pmset -g batt | sed -n '2p' | grep -oE '[0-9]{1,3}%' | head -n1 | tr -d '%')"
  printf '%s %s' "$source" "${percent:-}"
}

should_keep_awake() {
  local min_pct="$1"
  local source percent

  read -r source percent <<< "$(power_state)"

  if [[ "$source" == "AC Power" || "$source" == "AC" ]]; then
    return 0
  fi

  if [[ "$source" == "Battery Power" ]]; then
    if [[ -z "${percent:-}" ]]; then
      return 1
    fi
    if (( percent > min_pct )); then
      return 0
    fi
  fi

  return 1
}

start_or_pause_caffeinate() {
  local min_pct="$1"

  if should_keep_awake "$min_pct"; then
    if [[ -f "$SUB_PID_FILE" ]] && kill -0 "$(cat "$SUB_PID_FILE")" 2>/dev/null; then
      return
    fi

    local source percent
    read -r source percent <<< "$(power_state)"
    nohup caffeinate -dimsu </dev/null >>"$POWER_LOG" 2>&1 &
    echo "$!" > "$SUB_PID_FILE"
    echo "[$(date)] keep-awake start pid=$! source=$source percent=${percent:-unknown}" >> "$POWER_LOG"
  else
    if [[ -f "$SUB_PID_FILE" ]] && kill -0 "$(cat "$SUB_PID_FILE")" 2>/dev/null; then
      local sub_pid
      sub_pid="$(cat "$SUB_PID_FILE")"
      kill "$sub_pid" 2>/dev/null || true
      wait "$sub_pid" 2>/dev/null || true
      rm -f "$SUB_PID_FILE"
      echo "[$(date)] keep-awake stop pid=$sub_pid (battery guard)" >> "$POWER_LOG"
    else
      rm -f "$SUB_PID_FILE"
    fi
  fi
}

cleanup_power_guard() {
  if [[ -f "$SUB_PID_FILE" ]] && kill -0 "$(cat "$SUB_PID_FILE")" 2>/dev/null; then
    kill "$(cat "$SUB_PID_FILE")" 2>/dev/null || true
  fi
  rm -f "$SUB_PID_FILE"
}

power_guard_loop() {
  local minutes=180
  local battery_min=10
  local interval="$DEFAULT_GUARD_INTERVAL"

  while [[ $# -gt 0 ]]; do
    case "$1" in
      --minutes)
        shift
        [[ -z "${1:-}" ]] && { echo "--minutes needs value" >&2; exit 1; }
        [[ "$1" =~ ^[0-9]+$ ]] || { echo "--minutes needs integer" >&2; exit 1; }
        minutes="$1"
        ;;
      --battery-min)
        shift
        [[ -z "${1:-}" ]] && { echo "--battery-min needs value" >&2; exit 1; }
        [[ "$1" =~ ^[0-9]+$ ]] || { echo "--battery-min needs integer" >&2; exit 1; }
        battery_min="$1"
        ;;
      --interval)
        shift
        [[ -z "${1:-}" ]] && { echo "--interval needs value" >&2; exit 1; }
        [[ "$1" =~ ^[0-9]+$ ]] || { echo "--interval needs integer" >&2; exit 1; }
        interval="$1"
        ;;
      *)
        echo "Unknown power-guard option: $1" >&2
        exit 1
        ;;
    esac
    shift || true
  done

  local elapsed=0
  local max_seconds=0
  if (( minutes > 0 )); then
    max_seconds=$((minutes * 60))
  fi

  trap cleanup_power_guard EXIT
  while true; do
    start_or_pause_caffeinate "$battery_min"
    local source percent
    read -r source percent <<< "$(power_state)"
    echo "[$(date)] source=$source percent=${percent:-unknown}"
    if (( max_seconds > 0 && elapsed >= max_seconds )); then
      break
    fi
    sleep "$interval"
    (( elapsed += interval ))
  done
}

start_session() {
  assert_mac
  if [[ -f "$PID_FILE" ]] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
    echo "Already running: pid $(cat "$PID_FILE")"
    echo "Use: $SCRIPT_NAME stop"
    exit 0
  fi

  local minutes=180
  local battery_min=0
  local interval="$DEFAULT_GUARD_INTERVAL"

  while [[ $# -gt 0 ]]; do
    case "$1" in
      --minutes)
        shift
        [[ -z "${1:-}" ]] && { echo "--minutes needs a value" >&2; exit 1; }
        [[ "$1" =~ ^[0-9]+$ ]] && [[ "$1" -gt 0 ]] || { echo "--minutes needs a positive integer" >&2; exit 1; }
        minutes="$1"
        ;;
      --battery-min)
        shift
        [[ -z "${1:-}" ]] && { echo "--battery-min needs value" >&2; exit 1; }
        [[ "$1" =~ ^[0-9]+$ ]] || { echo "--battery-min needs integer" >&2; exit 1; }
        battery_min="$1"
        ;;
      --interval)
        shift
        [[ -z "${1:-}" ]] && { echo "--interval needs value" >&2; exit 1; }
        [[ "$1" =~ ^[0-9]+$ ]] || { echo "--interval needs integer" >&2; exit 1; }
        interval="$1"
        ;;
      *)
        echo "Unknown option: ${1}" >&2
        exit 1
        ;;
    esac
    shift || true
  done

  if (( battery_min > 0 )); then
    nohup "$SCRIPT_PATH" __power_guard --minutes "$minutes" --battery-min "$battery_min" --interval "$interval" </dev/null >"$LOG_FILE" 2>&1 &
    pid=$!
    echo "Started power-aware keep-awake: battery floor ${battery_min}% (AC allowed), runtime ${minutes} minute(s)."
  else
    seconds=$((minutes * 60))
    nohup caffeinate -dimsu -t "$seconds" </dev/null >"$LOG_FILE" 2>&1 &
    pid=$!
    echo "Started keep-awake for ${minutes} minute(s). pid=$pid"
    echo "Log: $LOG_FILE"
  fi
  echo "$pid" > "$PID_FILE"
}

stop_session() {
  assert_mac
  pid="$(current_command || true)"
  if [[ -z "${pid:-}" ]]; then
    echo "No keep-awake pid found."
    exit 1
  fi

  if kill "$pid" 2>/dev/null; then
    cleanup_power_guard || true
    rm -f "$PID_FILE"
    echo "Stopped keep-awake pid=$pid"
  else
    echo "No active process for pid=$pid. Cleaning pid file."
    cleanup_power_guard || true
    rm -f "$PID_FILE"
    exit 1
  fi
}

show_status() {
  assert_mac
  pid="$(current_command || true)"
  if [[ -z "${pid:-}" ]]; then
    echo "Keep-awake: not running (no pid file)."
    exit 0
  fi

  if kill -0 "$pid" 2>/dev/null; then
    echo "Keep-awake: running (pid=$pid)."
    if [[ -f "$SUB_PID_FILE" ]] && kill -0 "$(cat "$SUB_PID_FILE")" 2>/dev/null; then
      echo "Power-guard caffeinate active (pid=$(cat "$SUB_PID_FILE"))."
    fi
    local state
    state="$(power_state)"
    echo "Current power: ${state:-unknown}"
    echo "Log: $LOG_FILE"
    echo "Power log: $POWER_LOG"
  else
    echo "Keep-awake pid=$pid is stale; remove state with: $SCRIPT_NAME stop"
    exit 1
  fi
}

case "${1:-help}" in
  start)
    shift || true
    start_session "$@"
    ;;
  stop)
    stop_session
    ;;
  status)
    show_status
    ;;
  help)
    show_help
    ;;
  __power_guard)
    shift || true
    power_guard_loop "$@"
    ;;
  *)
    echo "Unknown command: ${1:-}" >&2
    show_help
    exit 1
    ;;
esac
