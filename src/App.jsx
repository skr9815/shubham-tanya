import NavContainer from './containers/NavContainer.jsx'
import HeroContainer from './containers/HeroContainer.jsx'
import CountdownContainer from './containers/CountdownContainer.jsx'
import FamiliesContainer from './containers/FamiliesContainer.jsx'
import EventsContainer from './containers/EventsContainer.jsx'
import SaveTheDateContainer from './containers/SaveTheDateContainer.jsx'
import RsvpContainer from './containers/RsvpContainer.jsx'
import VenueContainer from './containers/VenueContainer.jsx'
import FooterContainer from './containers/FooterContainer.jsx'
import MusicContainer from './containers/MusicContainer.jsx'
import { useFrameSync } from './lib/frame.js'

export default function App() {
  useFrameSync()
  return (
    <>
      <NavContainer />
      <HeroContainer />
      <CountdownContainer />
      <FamiliesContainer />
      <EventsContainer />
      <SaveTheDateContainer />
      <RsvpContainer />
      <VenueContainer />
      <FooterContainer />
      <MusicContainer />
    </>
  )
}
