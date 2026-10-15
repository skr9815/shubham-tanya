import { useState } from 'react'

const CLOSE_MS = 900 // welcome screen zoom-and-fade, matches .welcome.closing in CSS
const SHOWER_MS = 7000 // how long the petal shower stays mounted

// Welcome screen exit: it zooms and fades away first, then unmounts, while petals rain over the site
export default function useWelcomeTransition() {
  const [opened, setOpened] = useState(false)
  const [closing, setClosing] = useState(false)
  const [shower, setShower] = useState(false)

  const open = () => {
    if (closing) return false
    setClosing(true)
    setShower(true)
    setTimeout(() => setOpened(true), CLOSE_MS)
    setTimeout(() => setShower(false), SHOWER_MS)
    return true
  }

  // Skip straight past the welcome screen with no animation
  const skip = () => setOpened(true)

  return { opened, closing, shower, open, skip }
}
