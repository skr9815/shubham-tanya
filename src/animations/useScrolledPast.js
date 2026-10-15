import { useEffect, useState } from 'react'

// True (for good) once the guest has scrolled more than `px` down the page
export default function useScrolledPast(px) {
  const [past, setPast] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > px) {
        setPast(true)
        window.removeEventListener('scroll', onScroll)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [px])

  return past
}
