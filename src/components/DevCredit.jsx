import { useEffect, useState } from 'react'
import { STEPS, CURVES } from '../lib/motion.js'
import useBodyScrollLock from '../hooks/useBodyScrollLock.js'

const resolve = (curve) =>
  String.fromCharCode(...curve.map((v, i) => (v - i * 7) ^ STEPS[i % STEPS.length]))

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const GmailIcon = () => (
  <svg viewBox="52 42 88 66" aria-hidden="true">
    <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
    <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
    <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
    <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
    <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" />
  </svg>
)

export default function DevCredit() {
  const [open, setOpen] = useState(false)
  useBodyScrollLock(open)

  // Escape closes the popup
  useEffect(() => {
    if (!open) return
    const onKey = (ev) => { if (ev.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const contact = (e) => {
    e.preventDefault()
    setOpen(true)
  }
  const whatsapp = () => window.open(`https://wa.me/${resolve(CURVES.ripple)}`, '_blank', 'noopener')
  const mail = () => { window.location.href = `mailto:${resolve(CURVES.spring)}` }

  return (
    <>
      <p className="dev-credit">
        {resolve(CURVES.linear)}{resolve(CURVES.ease)}{resolve(CURVES.step)}<a href="#" onClick={contact}>{resolve(CURVES.bounce)}</a>
      </p>
      {open && (
        <div className="dev-modal-backdrop" onClick={() => setOpen(false)}>
          <div className="dev-modal" role="dialog" aria-modal="true" aria-labelledby="dev-modal-title" onClick={(e) => e.stopPropagation()}>
            <button className="dev-modal-close" onClick={() => setOpen(false)} aria-label="Close">×</button>
            <img className="dev-modal-avatar" src="/images/dev-avatar.jpg" alt={resolve(CURVES.ease)} />
            <p id="dev-modal-title" className="dev-modal-title">Get in touch with {resolve(CURVES.ease)}</p>
            <p className="dev-modal-text">Loved this invitation? Let's craft a custom one for your special day.</p>
            <div className="dev-modal-actions">
              <button className="dev-modal-btn whatsapp" onClick={whatsapp}><WhatsAppIcon />Chat on WhatsApp</button>
              <button className="dev-modal-btn email" onClick={mail}><GmailIcon />Send an Email</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
