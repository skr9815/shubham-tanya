import { useState } from 'react'
import { wedding } from '../config.js'

export default function Rsvp() {
  const [form, setForm] = useState({ name: '', guests: '1', attending: 'Joyfully accepts', message: '' })
  const [sent, setSent] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const subject = `RSVP: ${form.name} — ${form.attending}`
    const body = `Name: ${form.name}\nGuests: ${form.guests}\nResponse: ${form.attending}\n\nMessage:\n${form.message}`
    window.location.href = `mailto:${wedding.rsvpEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="rsvp" className="section section-alt">
      <h2 className="section-title">RSVP</h2>
      <div className="rsvp-note">
        <p className="rsvp-note-thanks">Thank you for being a part of our lives</p>
        <p className="rsvp-note-blessing">
          Kindly grace the occasion with your gracious presence and shower your blessings upon the couple
          as they begin this beautiful new chapter of their lives together.
        </p>
      </div>
      {sent ? (
        <p className="thanks">Thank you, {form.name}! We can't wait to celebrate with you. 💐</p>
      ) : (
        <form className="rsvp-form" onSubmit={submit}>
          <input name="name" placeholder="Your full name" value={form.name} onChange={update} required />
          <select name="attending" value={form.attending} onChange={update}>
            <option>Joyfully accepts</option>
            <option>Regretfully declines</option>
          </select>
          <select name="guests" value={form.guests} onChange={update}>
            {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>)}
          </select>
          <textarea name="message" placeholder="Your wishes for the couple (optional)" rows="4" value={form.message} onChange={update} />
          <button className="btn" type="submit">Send RSVP</button>
        </form>
      )}
      <div className="contacts">
        {wedding.contacts.map((c) => (
          <a key={c.name} href={`tel:${c.phone.replace(/\s/g, '')}`}>📞 {c.name}: {c.phone}</a>
        ))}
      </div>
    </section>
  )
}
