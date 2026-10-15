import { monthLayout } from '../lib/dates.js'

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

function CalendarPage({ month, className, onGone }) {
  const { y, events } = month
  const { firstWeekday, daysInMonth, title } = monthLayout(month)
  const marked = [...events].sort((a, b) => a.day - b.day)

  return (
    <div className={`cal-page ${className}`} onAnimationEnd={(ev) => ev.target === ev.currentTarget && onGone?.()}>
      <header className="cal-head">
        <span className="cal-month">{title}</span>
        <span className="cal-year">{y}</span>
      </header>
      <div className="cal-grid">
        {WEEKDAYS.map((w, i) => <span key={i} className="cal-weekday">{w}</span>)}
        {Array.from({ length: firstWeekday }, (_, i) => <span key={`pad${i}`} />)}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1
          const order = marked.findIndex((e) => e.day === day)
          const event = marked[order]
          return event ? (
            // The plain date shows first, then flips over like a coin to reveal the event picture on its back
            <span key={day} className="cal-cell marked" style={{ '--i': order }} title={event.name}>
              <span className="cal-flip">
                <span className="cal-day">{day}</span>
                <img src={event.icon} alt={event.name} />
              </span>
              <b>{day}</b>
            </span>
          ) : (
            <span key={day} className="cal-cell">{day}</span>
          )
        })}
      </div>
      <ul className="cal-legend">
        {marked.map((e, i) => (
          <li key={e.name} style={{ '--i': i }}><b>{e.day}</b> {e.name}</li>
        ))}
      </ul>
    </div>
  )
}

// Wall calendar that marks each event date with its picture, flipping from month to month.
// `current` / `leaving` are { key, month } for the page on show and the one flipping away.
export default function SaveCalendar({ calendarRef, active, current, leaving, onLeaveDone }) {
  return (
    <div ref={calendarRef} className={`save-cal${active ? ' in' : ''}`} aria-label="Wedding calendar">
      <span className="cal-ring left" aria-hidden="true" />
      <span className="cal-ring right" aria-hidden="true" />
      <div className="cal-stage">
        {leaving && <CalendarPage key={leaving.key} month={leaving.month} className="leave" onGone={onLeaveDone} />}
        <CalendarPage key={current.key} month={current.month} className={current.first ? 'first' : 'enter'} />
      </div>
    </div>
  )
}
