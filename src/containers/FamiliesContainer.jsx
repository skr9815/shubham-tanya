import { wedding } from '../config.js'
import useInView from '../animations/useInView.js'
import { FAMILY_SPARKLES } from '../animations/particles.js'
import Families from '../components/Families.jsx'

export default function FamiliesContainer() {
  // Play the entrance animation once, when the section scrolls into view
  const [ref, visible] = useInView(0.2)
  return (
    <Families
      sectionRef={ref}
      visible={visible}
      bride={{ name: wedding.bride, family: wedding.families.bride }}
      groom={{ name: wedding.groom, family: wedding.families.groom }}
      sparkles={FAMILY_SPARKLES}
    />
  )
}
