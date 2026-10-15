import { wedding } from '../config.js'
import { monthsWithEvents } from '../lib/dates.js'
import usePageFlip from '../animations/usePageFlip.js'
import SaveCalendar from '../components/SaveCalendar.jsx'

const HOLD_MS = 6000 // how long each month stays up before the page flips
const MONTHS = monthsWithEvents(wedding.events)

const page = (n) => ({ key: `p${n}`, month: MONTHS[n % MONTHS.length], first: n === 0 })

export default function SaveCalendarContainer() {
  const { ref, active, turn, leaving, onLeaveDone } = usePageFlip(MONTHS.length, HOLD_MS)
  return (
    <SaveCalendar
      calendarRef={ref}
      active={active}
      current={page(turn)}
      leaving={leaving !== null ? page(leaving) : null}
      onLeaveDone={onLeaveDone}
    />
  )
}
