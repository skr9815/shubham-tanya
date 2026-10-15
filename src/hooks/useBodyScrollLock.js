import { useEffect } from 'react'

// Stops the page behind an overlay from scrolling while `locked`
export default function useBodyScrollLock(locked) {
  useEffect(() => {
    document.body.style.overflow = locked ? 'hidden' : ''
  }, [locked])
}
