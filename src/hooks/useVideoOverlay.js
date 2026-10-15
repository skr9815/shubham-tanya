import { useEffect } from 'react'

// While the pop-up video is open: background music pauses (and resumes on close),
// the page behind can't scroll, and Escape closes it
export default function useVideoOverlay(onClose) {
  useEffect(() => {
    const music = [...document.querySelectorAll('audio')].filter((a) => !a.paused)
    music.forEach((a) => a.pause())
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      music.forEach((a) => a.play().catch(() => {}))
    }
  }, [onClose])
}
