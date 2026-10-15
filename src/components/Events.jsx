import { Mandala } from './Decor.jsx'

// `children` are the event screens and the dividers between them
export default function Events({ children }) {
  return (
    <section id="events" className="events-section">
      <header className="events-head">
        <h2 className="section-title">Wedding Celebrations</h2>
        <p className="subtitle events-subtitle">Mangalik Karyakram · मांगलिक कार्यक्रम</p>
      </header>
      {children}
    </section>
  )
}

// Ornamental band between two event screens: gold lines draw outward from a turning mandala medallion
export function EventDivider({ dividerRef, visible }) {
  return (
    <div ref={dividerRef} className={`event-sep${visible ? ' in' : ''}`} aria-hidden="true">
      <span className="event-sep-line left" />
      <span className="event-sep-medallion"><Mandala size={60} /></span>
      <span className="event-sep-line right" />
    </div>
  )
}

export function EventScreen({ screenRef, visible, event: e, index, total, petals }) {
  return (
    <article
      ref={screenRef}
      className={`event-screen${e.cardSide === 'left' ? ' card-left' : ''}${visible ? ' in' : ''}`}
      // Events can bring their own artwork (and put the card on the left when the couple is on the right);
      // otherwise the default couple artwork is used
      style={{
        ...(e.bgLandscape && { '--bg-landscape': `url('${e.bgLandscape}')` }),
        ...(e.bgPortrait && { '--bg-portrait': `url('${e.bgPortrait}')` }),
        // horizontal focus of the portrait art on narrow screens, when the couple isn't centred
        ...(e.bgPortraitX && { '--bg-portrait-x': e.bgPortraitX }),
      }}
    >
      <div className="petals" aria-hidden="true">
        {petals.map(([left, size, dur, delay]) => (
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
