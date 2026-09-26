import { useEffect, useRef, useState } from 'react'
import { wedding } from '../config.js'

// Rose petals drifting down each event screen: [left %, size px, duration s, delay s]
const PETALS = [
  [6, 14, 11, 0], [18, 10, 14, 3], [29, 16, 12, 6], [41, 11, 15, 1], [52, 13, 13, 8],
  [63, 15, 11, 4], [74, 10, 16, 2], [85, 14, 12, 7], [93, 12, 14, 5], [35, 9, 17, 10],
]

function EventScreen({ event: e, index, total }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  // Start the entrance animations once the screen scrolls into view
  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); io.disconnect() }
    }, { threshold: 0.25 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return (
    <article
      ref={ref}
      className={`event-screen${visible ? ' in' : ''}`}
      // Events can bring their own artwork; otherwise the default couple artwork is used
      style={{
        ...(e.bgLandscape && { '--bg-landscape': `url('${e.bgLandscape}')` }),
        ...(e.bgPortrait && { '--bg-portrait': `url('${e.bgPortrait}')` }),
      }}
    >
      <div className="petals" aria-hidden="true">
        {PETALS.map(([left, size, dur, delay]) => (
          <span key={left} style={{ left: `${left}%`, width: size, height: size * 1.3, animationDuration: `${dur}s`, animationDelay: `${delay}s` }} />
        ))}
      </div>
      <div className="event-stage">
        <div className="event-frame">
          <p className="event-count">{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</p>
          <img className="event-medallion" src={e.icon} alt="" />
          <p className="event-hindi">{e.hindi}</p>
          <h3 className="event-name">{e.name}</h3>
          <div className="event-divider" aria-hidden="true">──── ❖ ────</div>
          <p className="event-date">{e.date}</p>
          <p className="event-time">{e.time}</p>
          <p className="event-venue">{e.venue.name}</p>
          <p className="event-city">{e.venue.city}</p>
          <p className="event-dress">Dress code · {e.dress}</p>
        </div>
      </div>
    </article>
  )
}

export default function Events() {
  return (
    <section id="events" className="events-section">
      <header className="events-head">
        <h2 className="section-title">Wedding Celebrations</h2>
        <p className="subtitle">Mangal Utsav · मंगल उत्सव</p>
      </header>
      {wedding.events.map((e, i) => (
        <EventScreen key={e.name} event={e} index={i} total={wedding.events.length} />
      ))}
    </section>
  )
}
