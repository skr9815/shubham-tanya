import { useEffect, useState } from 'react'
import useInView from './useInView.js'

// Wall calendar page turns: once in view, flips to the next page every `holdMs`.
// `turn` counts flips (and keys the pages so their animations replay); `leaving` is the page flipping away.
export default function usePageFlip(pageCount, holdMs) {
  const [ref, active] = useInView(0.35)
  const [turn, setTurn] = useState(0)
  const [leaving, setLeaving] = useState(null)

  useEffect(() => {
    if (!active || pageCount < 2) return
    const t = setTimeout(() => {
      setLeaving(turn)
      setTurn(turn + 1)
    }, holdMs)
    return () => clearTimeout(t)
  }, [active, turn, pageCount, holdMs])

  return { ref, active, turn, leaving, onLeaveDone: () => setLeaving(null) }
}
