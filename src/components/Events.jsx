import { wedding } from '../config.js'
import { Diya } from './Decor.jsx'

export default function Events() {
  return (
    <section id="events" className="section events-section">
      <h2 className="section-title light">Wedding Celebrations</h2>
      <p className="subtitle light">Mangal Utsav · मंगल उत्सव</p>
      <div className="events">
        {wedding.events.map((e) => (
          <article key={e.name} className="event-card">
            <div className="event-icon">{e.icon}</div>
            <p className="event-hindi">{e.hindi}</p>
            <h3>{e.name}</h3>
            <p className="event-date">{e.date}</p>
            <p>{e.time}</p>
            <p className="event-venue">📍 {e.venue.name}<br /><small>{e.venue.address}</small></p>
            <p className="event-dress">Dress code: {e.dress}</p>
            <a className="event-map" href={e.venue.mapLink} target="_blank" rel="noreferrer">Get Directions →</a>
          </article>
        ))}
      </div>
      <div className="diyas">
        {Array.from({ length: 5 }, (_, i) => <Diya key={i} />)}
      </div>
    </section>
  )
}
