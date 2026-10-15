import { useEffect, useState } from 'react'
import { timeUntil } from '../lib/dates.js'

// Ticks every second towards `iso`; `done` once it is reached
export default function useCountdown(iso) {
  const [timeLeft, setTimeLeft] = useState(() => timeUntil(iso))
  useEffect(() => {
    const id = setInterval(() => setTimeLeft(timeUntil(iso)), 1000)
    return () => clearInterval(id)
  }, [iso])
  return { timeLeft, done: Object.values(timeLeft).every((v) => v === 0) }
}
