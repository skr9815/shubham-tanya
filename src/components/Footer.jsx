import { wedding } from '../config.js'
import { Palace } from './Decor.jsx'
import DevCredit from './DevCredit.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <Palace className="footer-palace" />
      <div className="footer-body">
        <p className="footer-note">
          <span className="footer-note-title">A Little Request, With Love</span>
          As our celebrations are sacred family traditions, we kindly request an alcohol-free gathering. Thank you for
          being a part of our special day and for helping us keep the occasion joyful, sacred, and meaningful.
        </p>
        <p className="footer-names">{wedding.groom} & {wedding.bride}</p>
        <p>With blessings from {wedding.families.groom.title} & {wedding.families.bride.title}</p>
        <p className="hashtag">{wedding.hashtag}</p>
        
        <div className="copyright">
          <p>© 2026 {wedding.groom} & {wedding.bride}. All Rights Reserved.</p>
          <DevCredit />
        </div>
      </div>
    </footer>
  )
}
