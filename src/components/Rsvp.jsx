import { PhoneIcon } from './Decor.jsx'

export default function Rsvp({ form, sent, onChange, onSubmit, contacts }) {
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
        <form className="rsvp-form" onSubmit={onSubmit}>
          <input name="name" placeholder="Your full name" value={form.name} onChange={onChange} required />
          <select name="attending" value={form.attending} onChange={onChange}>
            <option>Joyfully accepts</option>
            <option>Regretfully declines</option>
          </select>
          <select name="guests" value={form.guests} onChange={onChange}>
            {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>)}
          </select>
          <textarea name="message" placeholder="Your wishes for the couple (optional)" rows="4" value={form.message} onChange={onChange} />
          <button className="btn" type="submit">Send RSVP</button>
        </form>
      )}
      <div className="contacts">
        {contacts.map((c) => (
          <a key={c.name} href={`tel:${c.phone.replace(/\s/g, '')}`}>
            <span className="contact-icon" aria-hidden="true"><PhoneIcon /></span> {c.name}: {c.phone}
          </a>
        ))}
      </div>
    </section>
  )
}
