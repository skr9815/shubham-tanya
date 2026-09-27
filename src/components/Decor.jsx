// Hand-drawn SVG ornaments: marigold toran, mandala, diya and palace silhouette.

// rose and jasmine garland, matching the flowers in the artwork
const GARLAND = ['#e8a3a8', '#fbf3ea', '#c9536d']

export function Toran({ swags = 10 }) {
  const w = 1200
  const step = w / swags
  const dots = []
  const strands = []
  for (let s = 0; s < swags; s++) {
    const x0 = s * step
    for (let i = 0; i <= 14; i++) {
      const t = i / 14
      const x = x0 + t * step
      const y = 8 + Math.sin(Math.PI * t) * 34
      dots.push(<circle key={`d${s}-${i}`} cx={x} cy={y} r="7" fill={GARLAND[(s + i) % 3]} />)
    }
    // hanging strand with a mango leaf at each join
    const hx = x0
    for (let j = 0; j < 5; j++) {
      strands.push(<circle key={`h${s}-${j}`} cx={hx} cy={14 + j * 12} r="5.5" fill={GARLAND[j % 3]} />)
    }
    strands.push(
      <path key={`l${s}`} d={`M${hx} 70 q -9 16 0 30 q 9 -14 0 -30z`} fill="#6b8a5a" />,
    )
  }
  return (
    <svg className="toran" viewBox={`0 0 ${w} 105`} preserveAspectRatio="none" aria-hidden="true">
      <rect x="0" y="0" width={w} height="10" fill="#8e3b55" />
      {strands}
      {dots}
    </svg>
  )
}

export function Mandala({ className = '', size = 200 }) {
  const petals = (n, r, len, wid, color, key) =>
    Array.from({ length: n }, (_, i) => (
      <ellipse
        key={`${key}${i}`}
        cx="100" cy={100 - r} rx={wid} ry={len}
        fill="none" stroke={color} strokeWidth="1.2"
        transform={`rotate(${(360 / n) * i} 100 100)`}
      />
    ))
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 200 200" aria-hidden="true">
      <g stroke="currentColor" fill="none">
        <circle cx="100" cy="100" r="96" strokeWidth="1" />
        <circle cx="100" cy="100" r="88" strokeWidth="0.6" strokeDasharray="2 4" />
        <circle cx="100" cy="100" r="20" strokeWidth="1.2" />
        <circle cx="100" cy="100" r="8" fill="currentColor" />
      </g>
      {petals(8, 38, 18, 8, 'currentColor', 'a')}
      {petals(16, 64, 18, 6, 'currentColor', 'b')}
      {petals(24, 82, 8, 3, 'currentColor', 'c')}
    </svg>
  )
}

export function Diya({ size = 40 }) {
  return (
    <svg className="diya" width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <path className="flame" d="M32 6 C 40 18, 38 28, 32 30 C 26 28, 24 18, 32 6z" fill="#fbbf24" />
      <path d="M32 14 C 36 21, 35 26, 32 27 C 29 26, 28 21, 32 14z" fill="#ea580c" />
      <path d="M6 36 H58 C 56 50, 44 58, 32 58 C 20 58, 8 50, 6 36z" fill="#b45309" />
      <path d="M6 36 H58" stroke="#fde68a" strokeWidth="3" />
      <circle cx="20" cy="46" r="2.5" fill="#fde68a" />
      <circle cx="32" cy="49" r="2.5" fill="#fde68a" />
      <circle cx="44" cy="46" r="2.5" fill="#fde68a" />
    </svg>
  )
}

function Chhatri({ x, y, s = 1 }) {
  // small domed pavilion: dome + pillars + pinnacle
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="-3" y="-78" width="6" height="14" />
      <path d="M-26 -40 C -26 -70, 26 -70, 26 -40z" />
      <rect x="-30" y="-42" width="60" height="6" />
      <rect x="-26" y="-36" width="6" height="36" />
      <rect x="20" y="-36" width="6" height="36" />
      <rect x="-3" y="-36" width="6" height="36" />
    </g>
  )
}

export function Palace({ className = '' }) {
  const arches = Array.from({ length: 11 }, (_, i) => 180 + i * 76)
  return (
    <svg className={className} viewBox="0 -24 1200 344" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
      <g fill="currentColor">
        {/* main body */}
        <rect x="140" y="170" width="920" height="150" />
        <rect x="120" y="160" width="960" height="12" />
        {/* side towers */}
        <rect x="60" y="110" width="110" height="210" />
        <rect x="1030" y="110" width="110" height="210" />
        <Chhatri x={115} y={110} s={1.4} />
        <Chhatri x={1085} y={110} s={1.4} />
        {/* central gate + big dome */}
        <rect x="480" y="90" width="240" height="230" />
        <rect x="470" y="82" width="260" height="10" />
        <path d="M510 82 C 510 -10, 690 -10, 690 82z" />
        <rect x="596" y="0" width="8" height="20" />
        <circle cx="600" cy="4" r="6" />
        {/* rooftop chhatris */}
        {[250, 360, 840, 950].map((x) => <Chhatri key={x} x={x} y={160} s={0.9} />)}
      </g>
      {/* arches cut out in background colour */}
      <g className="palace-cut">
        {arches.filter((x) => x < 470 || x > 730).map((x) => (
          <path key={x} d={`M${x} 320 V250 C ${x} 215, ${x + 44} 215, ${x + 44} 250 V320z`} />
        ))}
        <path d="M550 320 V210 C 550 140, 650 140, 650 210 V320z" />
        <path d="M85 320 V240 C 85 205, 145 205, 145 240 V320z" />
        <path d="M1055 320 V240 C 1055 205, 1115 205, 1115 240 V320z" />
      </g>
    </svg>
  )
}
