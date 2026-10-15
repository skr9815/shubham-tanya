import useScratchCard from '../animations/scratch/useScratchCard.js'
import ScratchCard from '../components/ScratchCard.jsx'

export default function ScratchCardContainer({ children, label = 'Scratch to reveal the date', threshold = 0.45 }) {
  const card = useScratchCard({ label, threshold })
  return <ScratchCard label={label} {...card}>{children}</ScratchCard>
}
