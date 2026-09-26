import { useState } from 'react'
import { wedding } from '../config.js'

const links = [
  ['family', 'Family'],
  ['events', 'Events'],
  ['venue', 'Venue'],
  ['calendar', 'Save the Date'],
  ['rsvp', 'RSVP'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="nav">
      <a href="#home" className="nav-logo">{wedding.groom[0]} & {wedding.bride[0]}</a>
      <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen(!open)}>☰</button>
      <ul className={open ? 'open' : ''}>
        {links.map(([id, label]) => (
          <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)}>{label}</a></li>
        ))}
      </ul>
    </nav>
  )
}
