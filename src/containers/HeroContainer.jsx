import { wedding } from '../config.js'
import Hero, { HeroDate } from '../components/Hero.jsx'
import ScratchCardContainer from './ScratchCardContainer.jsx'

export default function HeroContainer() {
  return (
    <Hero
      bride={wedding.bride}
      groom={wedding.groom}
      namesHindi={{ brideTitle: wedding.brideTitleHindi, bride: wedding.brideHindi, groomTitle: wedding.groomTitleHindi, groom: wedding.groomHindi }}
      parents={wedding.families.groom.parents}
    >
      {/* The date stays hidden under gold foil until the guest scratches it off */}
      <ScratchCardContainer>
        <HeroDate date={wedding.displayDate} city={wedding.city} />
      </ScratchCardContainer>
    </Hero>
  )
}
