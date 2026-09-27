import { useEffect, useRef, useState } from 'react'
import { wedding } from '../config.js'

const HOLD_MS = 6000 // how long each month stays up before the page flips
const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

// Event date in IST as numbers
const ymd = (iso) => {
  const [y, m, d] = new Date(iso).toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' }).split('-').map(Number)
  return { y, m, d }
}

// One calendar page per month that has events, in date order
const MONTHS = wedding.events.reduce((months, e) => {
  const { y, m, d } = ymd(e.start)
  let month = months.find((p) => p.y === y && p.m === m)
  if (!month) months.push((month = { y, m, events: [] }))
  month.events.push({ ...e, day: d })
  return months
}, [])

function CalendarPage({ month, className, onGone }) {
  const { y, m, events } = month
  const firstWeekday = new Date(Date.UTC(y, m - 1, 1)).getUTCDay()
  const daysInMonth = new Date(Date.UTC(y, m, 0)).getUTCDate()
  const title = new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString('en-IN', { month: 'long', timeZone: 'UTC' })
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

// Wall calendar that marks each event date with its picture, flipping from month to month
export default function SaveCalendar() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)
  const [turn, setTurn] = useState(0) // how many page flips so far; also keys the pages so their animations replay
  const [leaving, setLeaving] = useState(null)

  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setActive(true); io.disconnect() }
    }, { threshold: 0.35 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!active || MONTHS.length < 2) return
    const t = setTimeout(() => {
      setLeaving(turn)
      setTurn(turn + 1)
    }, HOLD_MS)
    return () => clearTimeout(t)
  }, [active, turn])

  const monthAt = (n) => MONTHS[n % MONTHS.length]

  return (
    <div ref={ref} className={`save-cal${active ? ' in' : ''}`} aria-label="Wedding calendar">
      <span className="cal-ring left" aria-hidden="true" />
      <span className="cal-ring right" aria-hidden="true" />
      <div className="cal-stage">
        {leaving !== null && (
          <CalendarPage key={`p${leaving}`} month={monthAt(leaving)} className="leave" onGone={() => setLeaving(null)} />
        )}
        <CalendarPage key={`p${turn}`} month={monthAt(turn)} className={turn === 0 ? 'first' : 'enter'} />
      </div>
    </div>
  )
}
