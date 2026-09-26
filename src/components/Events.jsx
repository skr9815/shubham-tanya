import { wedding } from '../config.js'

export default function Events() {
  return (
    <section id="events" className="section section-alt">
      <h2 className="section-title">Wedding Events</h2>
      <div className="events">
        {wedding.events.map((e) => (
          <article key={e.name} className="event-card">
            <div className="event-icon">{e.icon}</div>
            <h3>{e.name}</h3>
            <p className="event-date">{e.date}</p>
            <p>{e.time}</p>
            <p className="event-venue">📍 {e.venue}</p>
            <p className="event-dress">Dress code: {e.dress}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
