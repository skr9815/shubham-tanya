// Particle layouts for the decorative animations. Fixed tables stay the same on every visit;
// the generators are called once per mount and memoised by the containers.

// Rose petals drifting down each event screen: [left %, size px, duration s, delay s]
export const EVENT_PETALS = [
  [6, 14, 11, 0], [18, 10, 14, 3], [29, 16, 12, 6], [41, 11, 15, 1], [52, 13, 13, 8],
  [63, 15, 11, 4], [74, 10, 16, 2], [85, 14, 12, 7], [93, 12, 14, 5], [35, 9, 17, 10],
]

// Gold sparkles sitting on a family card's border, twinkling one after another: [top %, left %]
export const FAMILY_SPARKLES = [[0, 36], [8, 11], [34, 0], [62, 0], [90, 0], [100, 30], [100, 70], [90, 100], [62, 100], [34, 100], [8, 89], [0, 64]]

const SHOWER_COLORS = [
  ['#f9c5d1', '#e07a95'], ['#fbe3e8', '#f0a3b5'], ['#c9536d', '#8e3b55'], ['#fff4ea', '#f3c7b5'], ['#f5e6cc', '#c9a063'],
]

// A burst of rose petals raining over the whole screen, shown once when the invitation opens
export const makePetalShower = (count) => Array.from({ length: count }, (_, i) => ({
  left: Math.random() * 100,
  size: 10 + Math.random() * 14,
  delay: Math.random() * 1.6,
  duration: 3.2 + Math.random() * 2.4,
  drift: (Math.random() - 0.5) * 240,
  spin: (Math.random() < 0.5 ? -1 : 1) * (360 + Math.random() * 540),
  colors: SHOWER_COLORS[i % SHOWER_COLORS.length],
}))

// Fixed spots for the twinkling stars on the scratch card foil
export const makeTwinkles = (count) => Array.from({ length: count }, () => ({
  left: `${5 + Math.random() * 90}%`,
  top: `${10 + Math.random() * 80}%`,
  size: `${6 + Math.random() * 8}px`,
  delay: `${Math.random() * 2.5}s`,
}))
