// Pop-up portrait video player; tapping the backdrop or the × closes it
export default function VideoOverlay({ src, onClose }) {
  return (
    <div className="video-overlay" role="dialog" aria-modal="true" aria-label="Digital invitation video" onClick={onClose}>
      <button className="video-close" onClick={onClose} aria-label="Close video">×</button>
      <video className="video-player" src={src} controls autoPlay playsInline onClick={(e) => e.stopPropagation()} />
    </div>
  )
}
