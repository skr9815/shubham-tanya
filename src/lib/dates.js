const IST = { timeZone: 'Asia/Kolkata' }

// ['30', 'Nov'] for the Save the Date tiles
export const dayMonth = (iso) => {
  const d = new Date(iso)
  return [d.toLocaleDateString('en-IN', { ...IST, day: '2-digit' }), d.toLocaleDateString('en-IN', { ...IST, month: 'short' })]
}

// Event date in IST as numbers
export const ymd = (iso) => {
  const [y, m, d] = new Date(iso).toLocaleDateString('en-CA', IST).split('-').map(Number)
  return { y, m, d }
}

// One calendar page per month that has events, in date order
export const monthsWithEvents = (events) => events.reduce((months, e) => {
  const { y, m, d } = ymd(e.start)
  let month = months.find((p) => p.y === y && p.m === m)
  if (!month) months.push((month = { y, m, events: [] }))
  month.events.push({ ...e, day: d })
  return months
}, [])

// Layout facts for drawing one month's grid
export const monthLayout = ({ y, m }) => ({
  firstWeekday: new Date(Date.UTC(y, m - 1, 1)).getUTCDay(),
  daysInMonth: new Date(Date.UTC(y, m, 0)).getUTCDate(),
  title: new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString('en-IN', { month: 'long', timeZone: 'UTC' }),
})

// Time remaining until the given moment, never negative
export function timeUntil(iso) {
  const diff = Math.max(0, new Date(iso) - new Date())
  return {
    Days: Math.floor(diff / 86400000),
    Hours: Math.floor((diff / 3600000) % 24),
    Minutes: Math.floor((diff / 60000) % 60),
    Seconds: Math.floor((diff / 1000) % 60),
  }
}
