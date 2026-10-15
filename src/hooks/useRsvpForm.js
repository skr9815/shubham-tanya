import { useState } from 'react'

const INITIAL = { name: '', guests: '1', attending: 'Joyfully accepts', message: '' }

// RSVP form state; submitting opens the guest's mail app with the reply filled in
export default function useRsvpForm(email) {
  const [form, setForm] = useState(INITIAL)
  const [sent, setSent] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const subject = `RSVP: ${form.name} — ${form.attending}`
    const body = `Name: ${form.name}\nGuests: ${form.guests}\nResponse: ${form.attending}\n\nMessage:\n${form.message}`
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return { form, sent, update, submit }
}
