import { Fragment } from 'react'
import { wedding } from '../config.js'
import useInView from '../animations/useInView.js'
import { EVENT_PETALS } from '../animations/particles.js'
import Events, { EventDivider, EventScreen } from '../components/Events.jsx'

function EventDividerContainer() {
  const [ref, visible] = useInView(0.5)
  return <EventDivider dividerRef={ref} visible={visible} />
}

function EventScreenContainer(props) {
  // Start the entrance animations once the screen scrolls into view
  const [ref, visible] = useInView(0.25)
  return <EventScreen screenRef={ref} visible={visible} petals={EVENT_PETALS} {...props} />
}

export default function EventsContainer() {
  const { events } = wedding
  return (
    <Events>
      {events.map((e, i) => (
        <Fragment key={e.name}>
          {i > 0 && <EventDividerContainer />}
          <EventScreenContainer event={e} index={i} total={events.length} />
        </Fragment>
      ))}
    </Events>
  )
}
