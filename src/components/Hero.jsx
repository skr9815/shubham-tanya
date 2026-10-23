import { Toran, Mandala } from './Decor.jsx'

// `children` fills the date slot at the bottom of the card
export default function Hero({ bride, groom, namesHindi, parents, children }) {
  return (
    <header id="home" className="hero">
      {/* Brightened copies of the palace photo, revealed through drifting dot masks, make its lights twinkle */}
      <div className="hero-lights a" aria-hidden="true" />
      <div className="hero-lights b" aria-hidden="true" />
      <Toran />
      <Mandala className="hero-mandala left" size={260} />
      <Mandala className="hero-mandala right" size={260} />
      <div className="hero-inner">
        <div className="ganesh-frame">
          <img src="/images/ganpati-ji-face.webp" alt="Lord Ganesha" />
        </div>
        <p className="ganesh">॥ श्री गणेशाय नमः ॥</p>
        <p className="shloka">
          वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।<br />
          निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
        </p>
        <p className="eyebrow">Shubh Vivah · शुभ विवाह</p>
        <h1 className="names">
          {groom} <span className="amp">&</span> {bride}
        </h1>
        <p className="names-hindi">{namesHindi.groomTitle} {namesHindi.groom} ❤ {namesHindi.brideTitle} {namesHindi.bride}</p>
        <p className="invite">
          With the blessings of Lord Ganesha and our elders, {parents} joyfully
          invite you to the wedding of their beloved son <strong>{groom}</strong> with <strong>{bride}</strong>,
          as they begin their journey of forever
        </p>
        <div className="divider">❁ ❁ ❁</div>
        {children}
      </div>
    </header>
  )
}

export function HeroDate({ date, city }) {
  return (
    <>
      <p className="hero-date">{date}</p>
      <p className="hero-city">{city}</p>
    </>
  )
}
