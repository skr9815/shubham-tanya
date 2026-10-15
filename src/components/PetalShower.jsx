// Rose petals raining over the whole screen; `petals` come from animations/particles.js
export default function PetalShower({ petals }) {
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
