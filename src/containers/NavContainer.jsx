import { useState } from 'react'
import { wedding } from '../config.js'
import Nav from '../components/Nav.jsx'

const LINKS = [
  ['family', 'Family'],
  ['events', 'Events'],
  ['calendar', 'Save the Date'],
  ['rsvp', 'RSVP'],
  ['venue', 'Venue'],
]

export default function NavContainer() {
  const [open, setOpen] = useState(false)
  return (
    <Nav
      initials={[wedding.groom[0], wedding.bride[0]]}
      links={LINKS}
      open={open}
      onToggle={() => setOpen(!open)}
      onNavigate={() => setOpen(false)}
    />
  )
}
