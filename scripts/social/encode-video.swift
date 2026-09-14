import Foundation
import AVFoundation
import AppKit
import CoreGraphics
import CoreVideo
import ImageIO
import UniformTypeIdentifiers

struct Scene: Decodable { let image: String; let duration: Double }
struct Timeline: Decodable { let width: Int; let height: Int; let fps: Int; let scenes: [Scene] }
let args = CommandLine.arguments
if args.count != 3 { fatalError("Usage: encode-video timeline.json output.mp4") }
let timeline = try JSONDecoder().decode(Timeline.self, from: Data(contentsOf: URL(fileURLWithPath: args[1])))
let output = URL(fileURLWithPath: args[2])
try? FileManager.default.removeItem(at: output)
let writer = try AVAssetWriter(outputURL: output, fileType: .mp4)
let input = AVAssetWriterInput(mediaType: .video, outputSettings: [
    AVVideoCodecKey: AVVideoCodecType.h264,
    AVVideoWidthKey: timeline.width, AVVideoHeightKey: timeline.height,
    AVVideoCompressionPropertiesKey: [AVVideoAverageBitRateKey: 4_000_000, AVVideoMaxKeyFrameIntervalKey: timeline.fps * 2, AVVideoProfileLevelKey: AVVideoProfileLevelH264HighAutoLevel]
])
input.expectsMediaDataInRealTime = false
let adaptor = AVAssetWriterInputPixelBufferAdaptor(assetWriterInput: input, sourcePixelBufferAttributes: [
    kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_32ARGB,
    kCVPixelBufferWidthKey as String: timeline.width, kCVPixelBufferHeightKey as String: timeline.height,
    kCVPixelBufferCGImageCompatibilityKey as String: true, kCVPixelBufferCGBitmapContextCompatibilityKey as String: true
])
writer.add(input)
guard writer.startWriting() else { fatalError("Could not start writer: \(String(describing: writer.error))") }
writer.startSession(atSourceTime: .zero)
var frame = 0
for scene in timeline.scenes {
    let imageURL = URL(fileURLWithPath: scene.image)
    guard let source = CGImageSourceCreateWithURL(imageURL as CFURL, nil), let image = CGImageSourceCreateImageAtIndex(source, 0, nil) else { fatalError("Bad PNG: \(scene.image)") }
    var maybeBuffer: CVPixelBuffer?
    CVPixelBufferCreate(kCFAllocatorDefault, timeline.width, timeline.height, kCVPixelFormatType_32ARGB, nil, &maybeBuffer)
    guard let buffer = maybeBuffer else { fatalError("Could not create pixel buffer") }
    CVPixelBufferLockBaseAddress(buffer, [])
    let context = CGContext(data: CVPixelBufferGetBaseAddress(buffer), width: timeline.width, height: timeline.height, bitsPerComponent: 8, bytesPerRow: CVPixelBufferGetBytesPerRow(buffer), space: CGColorSpaceCreateDeviceRGB(), bitmapInfo: CGImageAlphaInfo.noneSkipFirst.rawValue)!
    context.draw(image, in: CGRect(x: 0, y: 0, width: timeline.width, height: timeline.height))
    CVPixelBufferUnlockBaseAddress(buffer, [])
    for _ in 0..<Int((scene.duration * Double(timeline.fps)).rounded()) {
        while !input.isReadyForMoreMediaData {
            if writer.status == .failed { fatalError("Writer failed: \(String(describing: writer.error))") }
            Thread.sleep(forTimeInterval: 0.002)
        }
        if !adaptor.append(buffer, withPresentationTime: CMTime(value: Int64(frame), timescale: Int32(timeline.fps))) { fatalError("Append failed: \(String(describing: writer.error))") }
        frame += 1
    }
}
input.markAsFinished()
writer.endSession(atSourceTime: CMTime(value: Int64(frame), timescale: Int32(timeline.fps)))
let semaphore = DispatchSemaphore(value: 0)
writer.finishWriting { semaphore.signal() }
semaphore.wait()
guard writer.status == .completed else { fatalError("Encoding failed: \(String(describing: writer.error))") }
// Decode a real video frame as a readable visual-QA artifact, not just the source PNG.
let asset = AVURLAsset(url: output)
let generator = AVAssetImageGenerator(asset: asset)
generator.appliesPreferredTrackTransform = true
generator.requestedTimeToleranceBefore = .zero
generator.requestedTimeToleranceAfter = .zero
let cgImage = try generator.copyCGImage(at: CMTime(seconds: 10, preferredTimescale: 30), actualTime: nil)
let qaURL = output.deletingPathExtension().appendingPathExtension("decoded.png")
let destination = CGImageDestinationCreateWithURL(qaURL as CFURL, UTType.png.identifier as CFString, 1, nil)!
CGImageDestinationAddImage(destination, cgImage, nil)
CGImageDestinationFinalize(destination)
let duration = CMTimeGetSeconds(asset.duration)
let track = asset.tracks(withMediaType: .video).first!
let report: [String: Any] = ["file": output.path, "duration_seconds": duration, "width": track.naturalSize.width, "height": track.naturalSize.height, "fps": track.nominalFrameRate, "frames_written": frame, "audio_tracks": asset.tracks(withMediaType: .audio).count, "decoded_frame": qaURL.path]
let json = try JSONSerialization.data(withJSONObject: report, options: [.prettyPrinted, .sortedKeys])
try json.write(to: output.deletingPathExtension().appendingPathExtension("qa.json"))
print("Encoded \(output.lastPathComponent): \(frame) frames, \(duration)s, \(track.naturalSize)")
