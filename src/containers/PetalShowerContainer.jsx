import { useMemo } from 'react'
import { makePetalShower } from '../animations/particles.js'
import PetalShower from '../components/PetalShower.jsx'

export default function PetalShowerContainer({ count = 70 }) {
  const petals = useMemo(() => makePetalShower(count), [count])
  return <PetalShower petals={petals} />
}
