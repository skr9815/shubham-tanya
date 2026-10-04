import { useEffect, useRef, useState } from 'react'
import { wedding } from '../config.js'
import { Mandala } from './Decor.jsx'

// Gold sparkles sitting on the card's border, twinkling one after another: [top %, left %]
const SPARKLES = [[0, 36], [8, 11], [34, 0], [62, 0], [90, 0], [100, 30], [100, 70], [90, 100], [62, 100], [34, 100], [8, 89], [0, 64]]

function FamilyCard({ side, name, family }) {
  return (
    <article className={`family-card ${side}`}>
      <span className="family-crest" aria-hidden="true"><Mandala size={58} /></span>
      <span className="family-sparkles" aria-hidden="true">
        {SPARKLES.map(([top, left], i) => (
          <i key={i} style={{ top: `${top}%`, left: `${left}%`, animationDelay: `${i * 0.33}s` }} />
        ))}
      </span>
      <p className="family-hindi">{family.hindi}</p>
      <h3 className="family-title">{family.title}</h3>
      <p className="family-person">{name}</p>
      <ul className="family-members">
        {[family.grandRelation, family.relation].map(([label, people], i) => (
          <li key={label} style={{ '--i': i }}>
            <span className="family-name">
              <span className="family-role">{label}</span>{' '}
              {people.map((p, j) => (
                <span key={p}>{p}{j < people.length - 1 && <span className="family-and"> & </span>}</span>
              ))}
            </span>
          </li>
        ))}
      </ul>
      {family.address && <p className="family-address" style={{ '--i': 2 }}>📍 {family.address}</p>}
    </article>
  )
}

export default function Families() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  // Play the entrance animation once, when the section scrolls into view
  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); io.disconnect() }
    }, { threshold: 0.2 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  const { groom, bride } = wedding.families
  return (
    <section id="family" ref={ref} className={`section families-section${visible ? ' in' : ''}`}>
      <h2 className="section-title">Our Families</h2>
      <p className="subtitle">दो परिवार, एक बंधन</p>
      <div className="families">
        <FamilyCard side="groom" name={wedding.groom} family={groom} />
        <div className="family-union" aria-hidden="true">
          {/* Gathbandhan: the two families' dupattas tied together */}
          <img className="family-knot" src="/images/gathbandhan.jpg" alt="" />
        </div>
        <FamilyCard side="bride" name={wedding.bride} family={bride} />
      </div>
    </section>
  )
}
