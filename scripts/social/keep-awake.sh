#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
SCRIPT_NAME="$(basename "$0")"
PID_FILE="$ROOT_DIR/.keep-awake.pid"
LOG_FILE="$ROOT_DIR/.keep-awake.log"

show_help() {
  cat <<'EOF'
Usage:
  keep-awake.sh start [--minutes <minutes>]   Start temporary anti-sleep session.
  keep-awake.sh stop                          Stop active anti-sleep session.
  keep-awake.sh status                        Show current anti-sleep status.
  keep-awake.sh help                          Show this help text.

Examples:
  ./scripts/social/keep-awake.sh start --minutes 180
  ./scripts/social/keep-awake.sh status
  ./scripts/social/keep-awake.sh stop
EOF
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

start_session() {
  assert_mac
  if [[ -f "$PID_FILE" ]] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
    echo "Already running: pid $(cat "$PID_FILE")"
    echo "Use: $SCRIPT_NAME stop"
    exit 0
  fi

  minutes=180
  if [[ "${1:-}" == "--minutes" ]]; then
    if [[ -z "${2:-}" ]] || ! [[ "$2" =~ ^[0-9]+$ ]] || [[ "$2" -le 0 ]]; then
      echo "Use --minutes with a positive integer." >&2
      exit 1
    fi
    minutes="$2"
  elif [[ -n "${1:-}" ]]; then
    echo "Unknown option: ${1}" >&2
    exit 1
  fi

  seconds=$((minutes * 60))
  nohup caffeinate -dimsu -t "$seconds" </dev/null > "$LOG_FILE" 2>&1 &
  pid=$!
  echo "$pid" > "$PID_FILE"
  echo "Started keep-awake for ${minutes} minute(s). pid=$pid"
  echo "Log: $LOG_FILE"
}

stop_session() {
  assert_mac
  pid="$(current_command || true)"
  if [[ -z "${pid:-}" ]]; then
    echo "No keep-awake pid found."
    exit 1
  fi
  if kill "$pid" 2>/dev/null; then
    rm -f "$PID_FILE"
    echo "Stopped keep-awake pid=$pid"
  else
    echo "No active process for pid=$pid. Cleaning pid file."
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
    echo "Log: $LOG_FILE"
  else
    echo "Keep-awake pid=$pid is stale; remove state with: $SCRIPT_NAME stop"
    exit 1
  fi
}

case "${1:-help}" in
  start)
    shift || true
    start_session "${1:-}" "${2:-}"
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
  *)
    echo "Unknown command: ${1:-}" >&2
    show_help
    exit 1
    ;;
esac
