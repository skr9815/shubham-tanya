import { wedding } from '../config.js'
import { Toran, Mandala } from './Decor.jsx'

export default function Hero() {
  return (
    <header id="home" className="hero">
      <Toran />
      <Mandala className="hero-mandala left" size={260} />
      <Mandala className="hero-mandala right" size={260} />
      <div className="hero-inner">
        <div className="ganesh-frame">
          <img src="/images/ganpati-ji-face.jpg" alt="Lord Ganesha" />
        </div>
        <p className="ganesh">॥ श्री गणेशाय नमः ॥</p>
        <p className="shloka">
          वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।<br />
          निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
        </p>
        <p className="eyebrow">Shubh Vivah · शुभ विवाह</p>
        <h1 className="names">
          {wedding.groom} <span className="amp">&</span> {wedding.bride}
        </h1>
        <p className="names-hindi">{wedding.groomHindi} ❤ {wedding.brideHindi}</p>
        <p className="invite">
          With the blessings of Lord Ganesha and our elders, we joyfully invite you to celebrate our wedding
        </p>
        <div className="divider">❁ ❁ ❁</div>
        <p className="hero-date">{wedding.displayDate}</p>
        <p className="hero-city">{wedding.city}</p>
        <a href="#events" className="btn">View Celebrations</a>
      </div>
    </header>
  )
}
