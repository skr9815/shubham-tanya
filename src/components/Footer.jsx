import { wedding } from '../config.js'

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-names">{wedding.groom} & {wedding.bride}</p>
      <p>With blessings from {wedding.families.groom} & {wedding.families.bride}</p>
      <p className="hashtag">{wedding.hashtag}</p>
    </footer>
  )
}
