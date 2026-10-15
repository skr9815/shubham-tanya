import { useEffect, useRef, useState } from 'react'

// Flips to true the first time the element is `threshold` visible, to start its entrance animation once
export default function useInView(threshold) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); io.disconnect() }
    }, { threshold })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [threshold])

  return [ref, inView]
}
