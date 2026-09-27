import { useMemo } from 'react'

const COLORS = [
  ['#f9c5d1', '#e07a95'], ['#fbe3e8', '#f0a3b5'], ['#c9536d', '#8e3b55'], ['#fff4ea', '#f3c7b5'], ['#f5e6cc', '#c9a063'],
]

// A burst of rose petals raining over the whole screen, shown once when the invitation opens
export default function PetalShower({ count = 70 }) {
  const petals = useMemo(
    () => Array.from({ length: count }, (_, i) => ({
      left: Math.random() * 100,
      size: 10 + Math.random() * 14,
      delay: Math.random() * 1.6,
      duration: 3.2 + Math.random() * 2.4,
      drift: (Math.random() - 0.5) * 240,
      spin: (Math.random() < 0.5 ? -1 : 1) * (360 + Math.random() * 540),
      colors: COLORS[i % COLORS.length],
    })),
    [count],
  )
  return (
    <div className="petal-shower" aria-hidden="true">
      {petals.map((p, i) => (
        <span
          key={i}
          style={{
            left: `${p.left}%`, width: p.size, height: p.size * 1.3,
            animationDelay: `${p.delay}s`, animationDuration: `${p.duration}s`,
            '--drift': `${p.drift}px`, '--spin': `${p.spin}deg`,
            background: `linear-gradient(135deg, ${p.colors[0]}, ${p.colors[1]})`,
          }}
        />
      ))}
    </div>
  )
}
