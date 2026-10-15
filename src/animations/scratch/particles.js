// Short-lived DOM particles for the scratch card; CSS animates each one and it removes itself.
// `spread` is how far it flies, `lift` pushes it down (positive) or up (negative).
export function spawnParticle(parent, cls, x, y, spread, lift) {
  const el = document.createElement('span')
  el.className = cls
  const angle = Math.random() * Math.PI * 2
  el.style.left = `${x}px`
  el.style.top = `${y}px`
  el.style.setProperty('--dx', `${Math.cos(angle) * spread * (0.4 + Math.random())}px`)
  el.style.setProperty('--dy', `${Math.sin(angle) * spread * 0.6 + lift * (0.5 + Math.random())}px`)
  el.style.setProperty('--rot', `${(Math.random() - 0.5) * 720}deg`)
  el.style.setProperty('--size', `${3 + Math.random() * 5}px`)
  el.style.animationDelay = `${Math.random() * 120}ms`
  el.addEventListener('animationend', () => el.remove())
  parent.appendChild(el)
}

// Gold flakes peel off and tumble down as the foil is rubbed away
export const flake = (parent, p) => { if (Math.random() < 0.6) spawnParticle(parent, 'scratch-flake', p.x, p.y, 30, 50) }

// Sparkles burst across the whole card as the foil dissolves
export function sparkleBurst(parent, count = 36) {
  const { width, height } = parent.getBoundingClientRect()
  for (let i = 0; i < count; i++) spawnParticle(parent, 'scratch-sparkle', Math.random() * width, Math.random() * height, 70, -40)
}
