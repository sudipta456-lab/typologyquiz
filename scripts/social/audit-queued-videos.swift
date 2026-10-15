import Foundation
import CryptoKit
import AVFoundation
import CoreGraphics
import ImageIO
import UniformTypeIdentifiers

// Read-only audit of queued TikTok videos: hashes each file against the ledger and decodes four sampled frames (not a frame-by-frame decode).
// Usage: audit-queued-videos publishing-ledger.json new-output-folder [cutoff-iso8601]
let args = CommandLine.arguments
if args.count < 3 || args.count > 4 { fatalError("Usage: audit-queued-videos publishing-ledger.json output-folder [cutoff-iso8601]") }
let ledgerURL = URL(fileURLWithPath: args[1])
let outputURL = URL(fileURLWithPath: args[2])
let cutoffText = args.count == 4 ? args[3] : "2026-10-15T18:30:00-06:00"

func parseDate(_ text: String) -> Date? {
    let plain = ISO8601DateFormatter()
    plain.formatOptions = [.withInternetDateTime]
    if let date = plain.date(from: text) { return date }
    let fractional = ISO8601DateFormatter()
    fractional.formatOptions = [.withInternetDateTime, .withFractionalSeconds]
    return fractional.date(from: text)
}

guard let cutoff = parseDate(cutoffText) else { fatalError("Invalid ISO8601 cutoff: \(cutoffText)") }
let fm = FileManager.default
if fm.fileExists(atPath: outputURL.path) { fatalError("Refusing to overwrite existing output: \(outputURL.path)") }

guard let ledgerData = try? Data(contentsOf: ledgerURL),
      let ledger = try JSONSerialization.jsonObject(with: ledgerData) as? [String: Any],
      let posts = ledger["posts"] as? [[String: Any]] else { fatalError("Could not read posts from ledger: \(ledgerURL.path)") }

try fm.createDirectory(at: outputURL, withIntermediateDirectories: false)

func safeName(_ text: String) -> String {
    String(text.map { $0.isLetter || $0.isNumber || $0 == "-" || $0 == "_" ? $0 : "_" })
}

func sha256Hex(of url: URL) -> String? {
    guard let handle = try? FileHandle(forReadingFrom: url) else { return nil }
    defer { try? handle.close() }
    var hasher = SHA256()
    while let chunk = try? handle.read(upToCount: 1 << 20), !chunk.isEmpty { hasher.update(data: chunk) }
    return hasher.finalize().map { String(format: "%02x", $0) }.joined()
}

func writePNG(_ image: CGImage, to url: URL) -> Bool {
    guard let destination = CGImageDestinationCreateWithURL(url as CFURL, UTType.png.identifier as CFString, 1, nil) else { return false }
    CGImageDestinationAddImage(destination, image, nil)
    return CGImageDestinationFinalize(destination)
}

let selected = posts.filter { post in
    guard (post["status"] as? String) == "scheduled_confirmed",
          let when = post["publish_at"] as? String, let date = parseDate(when) else { return false }
    return date >= cutoff
}
// Unparseable publish_at on a scheduled_confirmed row must not vanish silently.
let unparseable = posts.filter { post in
    guard (post["status"] as? String) == "scheduled_confirmed" else { return false }
    guard let when = post["publish_at"] as? String else { return true }
    return parseDate(when) == nil
}

var items: [[String: Any]] = []
var issueCount = 0

for (index, post) in selected.enumerated() {
    let id = (post["id"] as? String) ?? "unknown"
    let videoPath = (post["video"] as? String) ?? ""
    let dirName = String(format: "%02d-%@", index + 1, safeName(id))
    let itemDir = outputURL.appendingPathComponent(dirName)
    var errors: [String] = []
    var item: [String: Any] = [
        "ledger_id": id,
        "publish_at": post["publish_at"] ?? NSNull(),
        "caption": post["caption"] ?? NSNull(),
        "url": post["url"] ?? NSNull(),
        "video": videoPath,
        "expected_sha256": (post["sha256"] as? String) ?? NSNull(),
        "item_directory": itemDir.path,
    ]
    do { try fm.createDirectory(at: itemDir, withIntermediateDirectories: false) } catch { errors.append("Could not create item directory: \(error.localizedDescription)") }

    var snapshots: [[String: Any]] = []
    if videoPath.isEmpty {
        errors.append("Ledger row has no video path")
    } else if !fm.fileExists(atPath: videoPath) {
        errors.append("Video file missing: \(videoPath)")
    } else {
        let expected = (post["sha256"] as? String)?.lowercased()
        let actual = sha256Hex(of: URL(fileURLWithPath: videoPath))
        item["actual_sha256"] = actual ?? NSNull()
        if expected == nil { errors.append("Ledger row has no sha256") }
        else if actual == nil { errors.append("Could not hash video") }
        else if actual != expected { errors.append("sha256 mismatch: ledger \(expected!) != file \(actual!)") }
        let asset = AVURLAsset(url: URL(fileURLWithPath: videoPath))
        let duration = CMTimeGetSeconds(asset.duration)
        let videoTracks = asset.tracks(withMediaType: .video)
        if !asset.isPlayable { errors.append("AVAsset reports not playable") }
        if let track = videoTracks.first {
            let size = track.naturalSize.applying(track.preferredTransform)
            item["width"] = abs(Int(size.width.rounded()))
            item["height"] = abs(Int(size.height.rounded()))
            item["fps"] = Double(track.nominalFrameRate)
        } else {
            errors.append("No video track")
        }
        item["duration_seconds"] = duration.isFinite ? duration : NSNull()
        item["audio_tracks"] = asset.tracks(withMediaType: .audio).count
        item["has_audio"] = !asset.tracks(withMediaType: .audio).isEmpty

        if !duration.isFinite || duration <= 0 {
            errors.append("Invalid duration: \(duration)")
        } else if !videoTracks.isEmpty {
            let generator = AVAssetImageGenerator(asset: asset)
            generator.appliesPreferredTrackTransform = true
            generator.requestedTimeToleranceBefore = .zero
            generator.requestedTimeToleranceAfter = .zero
            let targets: [(String, Double)] = [("hook", 1), ("choices", 6), ("answer", 10), ("cta", max(duration - 1, 0))]
            for (name, seconds) in targets {
                var snap: [String: Any] = ["name": name, "requested_seconds": seconds]
                if seconds > duration {
                    let message = "\(name): requested \(seconds)s beyond duration \(duration)s"
                    errors.append(message); snap["error"] = message
                } else {
                    do {
                        var actual = CMTime.zero
                        let image = try generator.copyCGImage(at: CMTime(seconds: seconds, preferredTimescale: 600), actualTime: &actual)
                        let file = itemDir.appendingPathComponent("\(name).png")
                        if writePNG(image, to: file) {
                            snap["path"] = file.path
                            snap["actual_seconds"] = CMTimeGetSeconds(actual)
                            snap["pixel_width"] = image.width
                            snap["pixel_height"] = image.height
                        } else {
                            let message = "\(name): PNG write failed"
                            errors.append(message); snap["error"] = message
                        }
                    } catch {
                        let message = "\(name): decode failed at \(seconds)s: \(error.localizedDescription)"
                        errors.append(message); snap["error"] = message
                    }
                }
                snapshots.append(snap)
            }
        }
    }
    item["snapshots"] = snapshots
    item["errors"] = errors
    item["status"] = errors.isEmpty ? "decoded_ok" : "needs_review"
    if !errors.isEmpty { issueCount += 1 }
    items.append(item)
}

let unparseableIDs = unparseable.map { ($0["id"] as? String) ?? "unknown" }
let topStatus = (issueCount == 0 && unparseableIDs.isEmpty && !items.isEmpty) ? "decoded_ok_visual_review_pending" : "needs_review"
let report: [String: Any] = [
    "status": topStatus,
    "note": "Four sampled frames per video (1s hook, 6s choices, 10s answer, duration-1s cta) were decoded, not every frame, and not visually judged; a human/model must review the PNGs before any pass claim.",
    "ledger": ledgerURL.path,
    "output": outputURL.path,
    "cutoff": cutoffText,
    "filter": "status == scheduled_confirmed && publish_at >= cutoff",
    "ledger_posts": posts.count,
    "selected_count": items.count,
    "items_needing_review": issueCount,
    "unparseable_publish_at_ids": unparseableIDs,
    "items": items,
]
let json = try JSONSerialization.data(withJSONObject: report, options: [.prettyPrinted, .sortedKeys])
try json.write(to: outputURL.appendingPathComponent("report.json"))
print("status=\(topStatus) selected=\(items.count) needs_review=\(issueCount) unparseable=\(unparseableIDs.count)")
