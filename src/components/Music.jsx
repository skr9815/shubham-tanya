import { useEffect, useRef, useState } from 'react'
import { wedding } from '../config.js'

export default function Music() {
  const audio = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [opened, setOpened] = useState(false)
  const [closing, setClosing] = useState(false)

  const play = () => audio.current.play().then(() => setPlaying(true)).catch(() => {})

  useEffect(() => {
    audio.current.volume = 0.4
    // Some browsers allow autoplay (e.g. on repeat visits); if so, skip the welcome screen
    audio.current.play().then(() => { setPlaying(true); setOpened(true) }).catch(() => {})
  }, [])

  useEffect(() => {
    document.body.style.overflow = opened ? '' : 'hidden'
  }, [opened])

  // Browsers only allow sound after a tap, so the welcome screen's button starts the music
  // The welcome screen zooms and fades away first, then unmounts
  const open = () => {
    if (closing) return
    play()
    setClosing(true)
    setTimeout(() => setOpened(true), 900)
  }

  const toggle = () => {
    if (audio.current.paused) play()
    else { audio.current.pause(); setPlaying(false) }
  }

  return (
    <>
      <audio ref={audio} src="/music/jodha_flute.mp3" loop preload="auto" />
      {!opened && (
        <div className={`welcome${closing ? ' closing' : ''}`}>
          <div className="welcome-card">
            <p className="welcome-mantra">॥ श्री गणेशाय नमः ॥</p>
            <h1 className="welcome-names">{wedding.groom} <span>&</span> {wedding.bride}</h1>
            <p className="welcome-sub">You are cordially invited</p>
            <button className="welcome-btn" onClick={open}>
              <span className="welcome-sparkle" aria-hidden="true">✦</span>
              Open Invitation
              <span className="welcome-sparkle" aria-hidden="true">✦</span>
            </button>
          </div>
        </div>
      )}
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
