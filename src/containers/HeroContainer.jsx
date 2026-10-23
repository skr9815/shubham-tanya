import { useState } from 'react'
import { wedding } from '../config.js'
import Hero, { HeroDate } from '../components/Hero.jsx'
import ScratchCardContainer from './ScratchCardContainer.jsx'
import PetalShowerContainer from './PetalShowerContainer.jsx'

const SHOWER_MS = 7000 // how long the petal shower stays mounted after the date is revealed

export default function HeroContainer() {
  const [shower, setShower] = useState(false)
  // Rose petals rain over the screen once the guest scratches the date free
  const celebrate = () => {
    setShower(true)
    setTimeout(() => setShower(false), SHOWER_MS)
  }

  return (
    <>
      <Hero
        bride={wedding.bride}
        groom={wedding.groom}
        namesHindi={{ brideTitle: wedding.brideTitleHindi, bride: wedding.brideHindi, groomTitle: wedding.groomTitleHindi, groom: wedding.groomHindi }}
        parents={wedding.families.groom.parents}
      >
        {/* The date stays hidden under gold foil until the guest scratches it off */}
        <ScratchCardContainer onReveal={celebrate}>
          <HeroDate date={wedding.displayDate} city={wedding.city} />
        </ScratchCardContainer>
      </Hero>
      {shower && <PetalShowerContainer count={140} />}
    </>
  )
}
