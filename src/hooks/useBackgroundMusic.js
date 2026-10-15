import { useEffect, useRef, useState } from 'react'

// Background song: plays `maxPlays` times in a row then stops, pauses while the tab is hidden,
// and reports whether the browser let it autoplay. Spread `audioProps` onto the <audio> element.
export default function useBackgroundMusic({ maxPlays, volume, onAutoplay }) {
  const audio = useRef(null)
  const plays = useRef(0)
  const resumeOnReturn = useRef(false)
  const [playing, setPlaying] = useState(false)

  // `playing` follows the audio element's own play/pause events
  const play = () => audio.current.play().catch(() => {})

  useEffect(() => {
    audio.current.volume = volume
    // Some browsers allow autoplay (e.g. on repeat visits). Never start in a background tab.
    if (!document.hidden) audio.current.play().then(onAutoplay).catch(() => {})
  }, [])

  // Pause when the guest switches away from the tab, and pick up again when they come back
  useEffect(() => {
    const onVisibility = () => {
      const el = audio.current
      if (document.hidden) {
        resumeOnReturn.current = !el.paused
        el.pause()
      } else if (resumeOnReturn.current) {
        resumeOnReturn.current = false
        play()
      }
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  const onEnded = () => {
    plays.current += 1
    if (plays.current < maxPlays) play()
  }

  const toggle = () => {
    if (audio.current.paused) {
      // After the song has finished its plays, the button starts a fresh round
      if (plays.current >= maxPlays) plays.current = 0
      play()
    } else audio.current.pause()
  }

  return {
    playing,
    play,
    toggle,
    audioProps: { ref: audio, onPlay: () => setPlaying(true), onPause: () => setPlaying(false), onEnded },
  }
}
