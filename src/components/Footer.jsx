import { wedding } from '../config.js'
import { Palace } from './Decor.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <Palace className="footer-palace" />
      <div className="footer-body">
        <p className="footer-names">{wedding.groom} & {wedding.bride}</p>
        <p>With blessings from {wedding.families.groom} & {wedding.families.bride}</p>
        <p className="hashtag">{wedding.hashtag}</p>
        <p className="credits">
          Images: “Riddhi Siddhi Ganapati”, Ravi Varma Press c.1910 (public domain) ·
          “Mysuru Palace – Night View” by Ingo Mehling,{' '}
          <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">CC BY-SA 4.0</a>, via Wikimedia Commons
        </p>
      </div>
    </footer>
  )
}
