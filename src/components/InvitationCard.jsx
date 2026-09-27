import { useEffect, useState } from 'react'
import { wedding } from '../config.js'

// View / download buttons for the printable invitation card, shown once the file has been uploaded to public/
export default function InvitationCard() {
  const url = wedding.invitationCard
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!url) return
    // Missing files come back as the site's own HTML page, so check the type as well as the status
    fetch(url, { method: 'HEAD' })
      .then((res) => setReady(res.ok && !(res.headers.get('content-type') || '').includes('text/html')))
      .catch(() => setReady(false))
  }, [url])

  const fileName = `Shubham-Tanya-Invitation${url ? url.slice(url.lastIndexOf('.')) : ''}`

  return (
    <div className="invite-card-box">
      <h3 className="invite-card-title">Invitation Card</h3>
      <p className="invite-card-text">Keep a copy of our invitation — view it here or save it to your phone.</p>
      {ready ? (
        <div className="invite-card-actions">
          <a className="btn" href={url} target="_blank" rel="noreferrer">View Invitation</a>
          <a className="btn btn-outline" href={url} download={fileName}>Download Invitation</a>
        </div>
      ) : (
        <p className="invite-card-soon">Invitation card coming soon</p>
      )}
    </div>
  )
}
