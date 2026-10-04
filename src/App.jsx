import Hero from './components/Hero.jsx'
import Countdown from './components/Countdown.jsx'
import Families from './components/Families.jsx'
import Events from './components/Events.jsx'
import Venue from './components/Venue.jsx'
import SaveTheDate from './components/SaveTheDate.jsx'
import Rsvp from './components/Rsvp.jsx'
import Footer from './components/Footer.jsx'
import Nav from './components/Nav.jsx'
import Music from './components/Music.jsx'
import { useFrameSync } from './lib/frame.js'

export default function App() {
  useFrameSync()
  return (
    <>
      <Nav />
      <Hero />
      <Countdown />
      <Families />
      <Events />
      <SaveTheDate />
      <Rsvp />
      <Venue />
      <Footer />
      <Music />
    </>
  )
}
