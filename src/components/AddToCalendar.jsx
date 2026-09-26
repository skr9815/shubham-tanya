import { useEffect, useRef, useState } from 'react'
import { wedding } from '../config.js'

// 2026-11-30T18:00:00+05:30 → 20261130T123000Z
const utc = (iso) => new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')

function details(e) {
  return {
    title: `${e.name} · ${wedding.groom} & ${wedding.bride}`,
    location: `${e.venue.name}, ${e.venue.address}`,
    body: `${e.name} of ${wedding.groom} & ${wedding.bride}. Dress code: ${e.dress}. Directions: ${e.venue.mapLink}`,
  }
}

function googleUrl(e) {
  const d = details(e)
  const q = new URLSearchParams({ action: 'TEMPLATE', text: d.title, dates: `${utc(e.start)}/${utc(e.end)}`, location: d.location, details: d.body, ctz: 'Asia/Kolkata' })
  return `https://calendar.google.com/calendar/render?${q}`
}

function outlookUrl(e) {
  const d = details(e)
  const q = new URLSearchParams({ path: '/calendar/action/compose', rru: 'addevent', subject: d.title, startdt: e.start, enddt: e.end, location: d.location, body: d.body })
  return `https://outlook.live.com/calendar/0/deeplink/compose?${q}`
}

// .ics file for Apple Calendar (and any other calendar app)
function downloadIcs(e) {
  const d = details(e)
  const esc = (s) => s.replace(/[\\,;]/g, (c) => `\\${c}`)
  const ics = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Shubh Vivah//Invitation//EN', 'BEGIN:VEVENT',
    `UID:${utc(e.start)}-${e.name.replace(/\W+/g, '')}@shubh-vivah`, `DTSTAMP:${utc(new Date().toISOString())}`,
    `DTSTART:${utc(e.start)}`, `DTEND:${utc(e.end)}`,
    `SUMMARY:${esc(d.title)}`, `LOCATION:${esc(d.location)}`, `DESCRIPTION:${esc(d.body)}`,
    'BEGIN:VALARM', 'TRIGGER:-P1D', 'ACTION:DISPLAY', `DESCRIPTION:${esc(d.title)} tomorrow`, 'END:VALARM',
    'END:VEVENT', 'END:VCALENDAR',
  ].join('\r\n')
  const a = document.createElement('a')
  a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }))
  a.download = `${e.name.replace(/\W+/g, '-')}.ics`
  a.click()
  URL.revokeObjectURL(a.href)
}

export default function AddToCalendar({ event, className = '' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const close = (ev) => { if (!ref.current.contains(ev.target)) setOpen(false) }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [open])

  return (
    <div className={`add-cal ${className}`} ref={ref}>
      <button className="add-cal-btn" onClick={() => setOpen(!open)} aria-expanded={open}>📅 Add to Calendar</button>
      {open && (
        <div className="add-cal-menu">
          <a href={googleUrl(event)} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Google Calendar</a>
          <button onClick={() => { downloadIcs(event); setOpen(false) }}>Apple Calendar</button>
          <a href={outlookUrl(event)} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Outlook</a>
        </div>
      )}
    </div>
  )
}
