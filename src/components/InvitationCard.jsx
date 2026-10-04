import { useEffect, useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { wedding } from '../config.js'

function Soon({ children }) {
  return <p className="invite-card-soon">{children}</p>
}

// Video invitation, opened on YouTube
function DigitalInvitation() {
  const url = wedding.digitalInvitation
  return (
    <div className="invite-card-box">
      <span className="invite-card-icon" aria-hidden="true">
        {/* Line icon in the site's maroon */}
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2.5" y="5" width="19" height="14" rx="3" />
          <path d="M10 9.2v5.6l4.8-2.8z" fill="currentColor" />
        </svg>
      </span>
      <h3 className="invite-card-title">Digital Invitation</h3>
      <p className="invite-card-text">View our digital invitation — a special glimpse of our wedding celebrations.</p>
      {url ? (
        <a className="btn" href={url} target="_blank" rel="noreferrer">Watch on YouTube</a>
      ) : (
        <Soon>Digital invitation coming soon</Soon>
      )}
    </div>
  )
}

// Photographer's face-recognition gallery: a button for guests on their phones, and a QR code to scan from a big screen
function PhotoGallery() {
  const url = wedding.photoGallery
  return (
    <div className="invite-card-box">
      <span className="invite-card-icon" aria-hidden="true">
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
          <circle cx="12" cy="13.5" r="3.5" />
        </svg>
      </span>
      <h3 className="invite-card-title">Find Your Photos</h3>
      <p className="invite-card-text">
        Take a quick selfie and our photographer's AI face recognition will show you only the photos you appear in,
        from every ceremony.
      </p>
      {url ? (
        <>
          <div className="invite-qr">
            <QRCodeSVG value={url} size={150} fgColor="#6b2a3f" bgColor="transparent" marginSize={0} />
          </div>
          <a className="btn" href={url} target="_blank" rel="noreferrer">Find My Photos</a>
        </>
      ) : (
        <Soon>Coming soon · Available after 10th December 2026</Soon>
      )}
    </div>
  )
}

// View / download buttons for the printable invitation card, shown once the file has been uploaded to public/
function PrintedInvitation() {
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
      <span className="invite-card-icon" aria-hidden="true">
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3.5 6l8.5 7 8.5-7" />
        </svg>
      </span>
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

export default function InvitationCard() {
  return (
    <div className="invite-cards">
      <PrintedInvitation />
      <DigitalInvitation />
      <PhotoGallery />
    </div>
  )
}
