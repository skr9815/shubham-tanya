import { wedding } from '../config.js'
import { dayMonth } from '../lib/dates.js'
import SaveTheDate from '../components/SaveTheDate.jsx'
import AddToCalendarContainer from './AddToCalendarContainer.jsx'
import SaveCalendarContainer from './SaveCalendarContainer.jsx'

export default function SaveTheDateContainer() {
  const dates = wedding.events.map((e) => {
    const [day, month] = dayMonth(e.start)
    return { key: e.name, day, month, name: e.name, time: e.time, city: e.venue.city, action: <AddToCalendarContainer event={e} /> }
  })
  return <SaveTheDate dates={dates} calendar={<SaveCalendarContainer />} />
}
