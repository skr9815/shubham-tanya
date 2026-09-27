import { wedding } from '../config.js'
import { Palace } from './Decor.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <Palace className="footer-palace" />
      <div className="footer-body">
        <p className="footer-names">{wedding.groom} & {wedding.bride}</p>
        <p>With blessings from {wedding.families.groom.title} & {wedding.families.bride.title}</p>
        <p className="hashtag">{wedding.hashtag}</p>
        
        <div className="copyright">
          <p>© 2026 {wedding.groom} & {wedding.bride}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
