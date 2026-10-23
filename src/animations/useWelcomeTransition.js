import { useState } from 'react'

const CLOSE_MS = 900 // welcome screen zoom-and-fade, matches .welcome.closing in CSS

// Welcome screen exit: it zooms and fades away first, then unmounts
export default function useWelcomeTransition() {
  const [opened, setOpened] = useState(false)
  const [closing, setClosing] = useState(false)

  const open = () => {
    if (closing) return false
    setClosing(true)
    setTimeout(() => setOpened(true), CLOSE_MS)
    return true
  }

  // Skip straight past the welcome screen with no animation
  const skip = () => setOpened(true)

  return { opened, closing, open, skip }
}
