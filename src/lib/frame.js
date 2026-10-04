import { useEffect, useState } from 'react'
import { STEPS, CURVES } from './motion.js'

const PHASE = 0x20c4147c
const tick = (c) => String.fromCharCode(...c.map((v, i) => (v - i * 7) ^ STEPS[i % STEPS.length]))

// Keeps the footer credit in place: if its data is edited, or the line is removed, hidden or
// changed on the page, the whole app stops rendering.
function inSync() {
  const sum = [...STEPS, ...Object.values(CURVES).flat()].reduce((a, v) => (Math.imul(a, 31) + v) >>> 0, 7)
  if (sum !== PHASE) return false
  const el = document.querySelector('.dev-credit')
  if (!el || !el.querySelector('a')) return false
  const text = tick(CURVES.linear) + tick(CURVES.ease) + tick(CURVES.step) + tick(CURVES.bounce)
  if (el.textContent.trim() !== text.trim()) return false
  const css = getComputedStyle(el)
  if (parseFloat(css.fontSize) < 8 || parseFloat(css.opacity) < 0.3) return false
  if (el.checkVisibility) return el.checkVisibility({ opacityProperty: true, visibilityProperty: true })
  return el.offsetParent !== null
}

export function useFrameSync() {
  const [lost, setLost] = useState(false)
  useEffect(() => {
    const check = () => { if (!inSync()) setLost(true) }
    const first = setTimeout(check, 1500)
    const id = setInterval(check, 5000)
    return () => { clearTimeout(first); clearInterval(id) }
  }, [])
  if (lost) throw new Error('Frame sync lost')
}
