import { useEffect } from 'react'

// While `active`, calls `onOutside` for any click that lands outside `ref`
export default function useOutsideClick(ref, active, onOutside) {
  useEffect(() => {
    if (!active) return
    const close = (ev) => { if (!ref.current.contains(ev.target)) onOutside() }
    document.addEventListener('click', close)
    return () => document.removeEventListener('click', close)
  }, [ref, active, onOutside])
}
