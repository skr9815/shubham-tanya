import { useEffect, useRef, useState } from 'react'
import { wedding } from '../config.js'
import PetalShower from './PetalShower.jsx'
import ScrollArrow from './ScrollArrow.jsx'

// The song plays this many times in a row, then stops (the music button can start it again)
const MAX_PLAYS = 3

export default function Music() {
  const audio = useRef(null)
  const plays = useRef(0)
  const resumeOnReturn = useRef(false)
  const [playing, setPlaying] = useState(false)
  const [opened, setOpened] = useState(false)
  const [closing, setClosing] = useState(false)
  const [shower, setShower] = useState(false)

  // `playing` follows the audio element's own play/pause events
  const play = () => audio.current.play().catch(() => {})

  useEffect(() => {
    audio.current.volume = 0.4
    // Some browsers allow autoplay (e.g. on repeat visits); if so, skip the welcome screen.
    // Never start in a background tab.
    if (!document.hidden) audio.current.play().then(() => setOpened(true)).catch(() => {})
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
    if (plays.current < MAX_PLAYS) play()
  }

  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden'
  }, [opened])

  // Browsers only allow sound after a tap, so the welcome screen's button starts the music
  // The welcome screen zooms and fades away first, then unmounts
  const open = () => {
    if (closing) return
    play()
    setClosing(true)
    setShower(true)
    setTimeout(() => setOpened(true), 900)
    setTimeout(() => setShower(false), 7000)
  }

  const toggle = () => {
    if (audio.current.paused) {
      // After the song has finished its plays, the button starts a fresh round
      if (plays.current >= MAX_PLAYS) plays.current = 0
      play()
    } else audio.current.pause()
  }

  return (
    <>
      <audio
        ref={audio}
        src="/music/jodha_flute.mp3"
        preload="auto"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={onEnded}
      />
      {!opened && (
        <div className={`welcome${closing ? ' closing' : ''}`}>
          <div className="welcome-card">
            <p className="welcome-mantra">॥ श्री गणेशाय नमः ॥</p>
            <h1 className="welcome-names">{wedding.groom} <span className="weds">weds</span> {wedding.bride}</h1>
            <p className="welcome-vivah">शुभ विवाह</p>
            <p className="welcome-sub">You are cordially invited</p>
            <button className="welcome-btn" onClick={open}>
              <span className="welcome-sparkle" aria-hidden="true">✦</span>
              Open Invitation
              <span className="welcome-sparkle" aria-hidden="true">✦</span>
            </button>
          </div>
        </div>
      )}
      {shower && <PetalShower />}
      {opened && <ScrollArrow />}
      {opened && (
        <button
          className={`music-toggle${playing ? ' playing' : ''}`}
          onClick={toggle}
          aria-label={playing ? 'Turn music off' : 'Turn music on'}
          title={playing ? 'Turn music off' : 'Turn music on'}
        >
          {playing ? '♫' : '🔇'}
        </button>
      )}
    </>
  )
}
