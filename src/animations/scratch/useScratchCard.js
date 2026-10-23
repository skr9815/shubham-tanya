import { useEffect, useMemo, useRef, useState } from 'react'
import { makeTwinkles } from '../particles.js'
import { clearedRatio, paintFoil, scratchLine } from './foil.js'
import { flake, petalBurst, sparkleBurst } from './particles.js'

// Gold foil scratch card: guests rub it away to reveal what's underneath.
// Once `threshold` of the foil is cleared, the rest dissolves on its own and `onReveal` is called.
export default function useScratchCard({ label, threshold, onReveal }) {
  const wrapRef = useRef(null)
  const canvasRef = useRef(null)
  const drawing = useRef(false)
  const last = useRef(null)
  const [revealed, setRevealed] = useState(false)
  const twinkles = useMemo(() => makeTwinkles(10), [])

  // Repaint the foil whenever the card changes size, until it has been revealed
  useEffect(() => {
    if (revealed) return
    const wrap = wrapRef.current
    const paint = () => {
      const { width, height } = wrap.getBoundingClientRect()
      paintFoil(canvasRef.current, width, height, label)
    }
    paint()
    const ro = new ResizeObserver(paint)
    ro.observe(wrap)
    return () => ro.disconnect()
  }, [label, revealed])

  const pointAt = (e) => {
    const r = canvasRef.current.getBoundingClientRect()
    return { x: e.clientX - r.left, y: e.clientY - r.top }
  }

  const reveal = () => {
    if (revealed) return
    sparkleBurst(wrapRef.current)
    petalBurst(wrapRef.current)
    setRevealed(true)
    onReveal?.()
  }

  const scratch = (p) => {
    flake(wrapRef.current, p)
    scratchLine(canvasRef.current, last.current || p, p)
    last.current = p
  }

  const onPointerUp = () => {
    drawing.current = false
    last.current = null
    if (clearedRatio(canvasRef.current) >= threshold) reveal()
  }

  return {
    wrapRef,
    canvasRef,
    revealed,
    twinkles,
    foilHandlers: {
      onKeyDown: (e) => { if (e.key === 'Enter' || e.key === ' ') reveal() },
      onPointerDown: (e) => {
        drawing.current = true
        last.current = null
        canvasRef.current.setPointerCapture(e.pointerId)
        scratch(pointAt(e))
      },
      onPointerMove: (e) => { if (drawing.current) scratch(pointAt(e)) },
      onPointerUp,
      onPointerCancel: onPointerUp,
    },
  }
}
