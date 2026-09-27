import { useEffect, useState } from 'react'

// Gold chevrons cascading downward at the bottom of the screen after the invitation opens; they fade away on the first scroll
export default function ScrollArrow() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 60) {
        setHidden(true)
        window.removeEventListener('scroll', onScroll)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`scroll-arrow${hidden ? ' gone' : ''}`} aria-hidden="true">
      <i /><i /><i />
    </div>
  )
}
