import { wedding } from '../config.js'
import AddToCalendar from './AddToCalendar.jsx'

const dayMonth = (iso) => {
  const d = new Date(iso)
  const opts = { timeZone: 'Asia/Kolkata' }
  return [d.toLocaleDateString('en-IN', { ...opts, day: '2-digit' }), d.toLocaleDateString('en-IN', { ...opts, month: 'short' })]
}

export default function SaveTheDate() {
  return (
    <section id="calendar" className="section section-alt">
      <h2 className="section-title">Save the Dates</h2>
      <div className="save-dates">
        {wedding.events.map((e) => {
          const [day, month] = dayMonth(e.start)
          return (
            <div key={e.name} className="save-date">
              <div className="save-date-day"><span>{day}</span>{month}</div>
              <div className="save-date-info">
                <p className="save-date-name">{e.name}</p>
                <p>{e.time} · {e.venue.city}</p>
              </div>
              <AddToCalendar event={e} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
