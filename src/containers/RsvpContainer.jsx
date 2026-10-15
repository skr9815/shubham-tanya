import { wedding } from '../config.js'
import useRsvpForm from '../hooks/useRsvpForm.js'
import Rsvp from '../components/Rsvp.jsx'

export default function RsvpContainer() {
  const { form, sent, update, submit } = useRsvpForm(wedding.rsvpEmail)
  return <Rsvp form={form} sent={sent} onChange={update} onSubmit={submit} contacts={wedding.contacts} />
}
