import { wedding } from '../config.js'

export default function Hero() {
  return (
    <header id="home" className="hero">
      <div className="hero-inner">
        <p className="ganesh">|| Shree Ganeshaya Namah ||</p>
        <p className="eyebrow">Together with their families</p>
        <h1 className="names">
          {wedding.groom} <span className="amp">&</span> {wedding.bride}
        </h1>
        <p className="invite">request the pleasure of your company to celebrate their wedding</p>
        <div className="divider">❦</div>
        <p className="hero-date">{wedding.displayDate}</p>
        <p className="hero-city">{wedding.city}</p>
        <a href="#rsvp" className="btn">RSVP Now</a>
      </div>
    </header>
  )
}
