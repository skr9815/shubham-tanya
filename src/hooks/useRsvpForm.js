import { useState } from 'react'

const INITIAL = { name: '', guests: '1', attending: 'Joyfully accepts', message: '' }

// RSVP form state; submitting opens WhatsApp with the reply filled in, addressed to `phone`
export default function useRsvpForm(phone) {
  const [form, setForm] = useState(INITIAL)
  const [sent, setSent] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const text = [
      `*RSVP: ${form.name} — ${form.attending}*`,
      `Name: ${form.name}`,
      `Guests: ${form.guests}`,
      `Response: ${form.attending}`,
      ...(form.message.trim() ? ['', `Message: ${form.message.trim()}`] : []),
    ].join('\n')
    window.open(`https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
    setSent(true)
  }

  return { form, sent, update, submit }
}
