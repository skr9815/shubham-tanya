import { useCallback, useRef, useState } from 'react'
import { downloadIcs, googleUrl, outlookUrl } from '../lib/calendar.js'
import useOutsideClick from '../hooks/useOutsideClick.js'
import AddToCalendar from '../components/AddToCalendar.jsx'

export default function AddToCalendarContainer({ event, className }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const close = useCallback(() => setOpen(false), [])
  useOutsideClick(ref, open, close)

  return (
    <AddToCalendar
      menuRef={ref}
      className={className}
      open={open}
      onToggle={() => setOpen(!open)}
      onClose={close}
      googleUrl={googleUrl(event)}
      outlookUrl={outlookUrl(event)}
      onApple={() => { downloadIcs(event); close() }}
    />
  )
}
