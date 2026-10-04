import { useEffect, useState } from 'react'
import { wedding } from '../config.js'

function timeLeft() {
  const diff = Math.max(0, new Date(wedding.date) - new Date())
  return {
    Days: Math.floor(diff / 86400000),
    Hours: Math.floor((diff / 3600000) % 24),
    Minutes: Math.floor((diff / 60000) % 60),
    Seconds: Math.floor((diff / 1000) % 60),
  }
}

export default function Countdown() {
  const [t, setT] = useState(timeLeft)
  useEffect(() => {
    const id = setInterval(() => setT(timeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const done = Object.values(t).every((v) => v === 0)

  return (
    <section className="countdown">
      <h2 className="section-title">{done ? 'Just Married!' : 'Counting Down To Forever'}</h2>
      {!done && (
        <div className="timer">
          {Object.entries(t).map(([label, value], i) => (
            <div key={label} className={`timer-box ${label.toLowerCase()}`} style={{ '--i': i }}>
              {/* Keyed on the value so each new number rolls in */}
              <span key={value} className="timer-num">{String(value).padStart(2, '0')}</span>
              <span className="timer-label">{label}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
