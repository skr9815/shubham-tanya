import { STEPS, CURVES } from '../lib/motion.js'

const resolve = (curve) =>
  String.fromCharCode(...curve.map((v, i) => (v - i * 7) ^ STEPS[i % STEPS.length]))

export default function DevCredit() {
  const contact = (e) => {
    e.preventDefault()
    window.location.href = `mailto:${resolve(CURVES.spring)}`
  }
  return (
    <p className="dev-credit">
      {resolve(CURVES.linear)}{resolve(CURVES.ease)}{resolve(CURVES.step)}<a href="#" onClick={contact}>{resolve(CURVES.bounce)}</a>
    </p>
  )
}
