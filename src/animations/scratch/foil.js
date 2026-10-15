// Canvas drawing for the scratch card's gold foil

const BRUSH = 34 // width of the scratched line, px

// Paints the foil over the whole canvas, sized to `width` × `height` CSS pixels
export function paintFoil(canvas, width, height, label) {
  const dpr = window.devicePixelRatio || 1
  canvas.width = width * dpr
  canvas.height = height * dpr
  const ctx = canvas.getContext('2d')
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  ctx.globalCompositeOperation = 'source-over'

  const foil = ctx.createLinearGradient(0, 0, width, height)
  foil.addColorStop(0, '#b8894a')
  foil.addColorStop(0.3, '#f5e6cc')
  foil.addColorStop(0.5, '#c9a063')
  foil.addColorStop(0.7, '#f1d9a8')
  foil.addColorStop(1, '#a87a3d')
  // Slightly see-through so a hint of the date glimmers beneath
  ctx.globalAlpha = 0.96
  ctx.fillStyle = foil
  ctx.beginPath()
  ctx.roundRect(0, 0, width, height, 14)
  ctx.fill()
  ctx.globalAlpha = 1

  // Fine sparkle so it reads as foil rather than a flat block
  for (let i = 0; i < (width * height) / 40; i++) {
    ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.35})`
    ctx.fillRect(Math.random() * width, Math.random() * height, 1, 1)
  }

  ctx.fillStyle = '#6b2a3f'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.font = `700 ${Math.min(26, width / 13)}px "Cormorant Garamond", serif`
  ctx.fillText(label, width / 2, height / 2)
}

// Erases a line of foil from `from` to `to`
export function scratchLine(canvas, from, to) {
  const ctx = canvas.getContext('2d')
  ctx.globalCompositeOperation = 'destination-out'
  ctx.lineWidth = BRUSH
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.beginPath()
  ctx.moveTo(from.x, from.y)
  ctx.lineTo(to.x, to.y)
  ctx.stroke()
}

// Share of the foil already scratched away, sampling every 16th pixel
export function clearedRatio(canvas) {
  const { data } = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height)
  let clear = 0
  let total = 0
  for (let i = 3; i < data.length; i += 4 * 16) {
    total++
    if (data[i] === 0) clear++
  }
  return clear / total
}
