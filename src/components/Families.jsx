import { useEffect, useRef, useState } from 'react'
import { wedding } from '../config.js'

function FamilyCard({ side, name, family }) {
  return (
    <article className={`family-card ${side}`}>
      <p className="family-hindi">{family.hindi}</p>
      <h3 className="family-title">{family.title}</h3>
      <p className="family-person">{name}</p>
      <ul className="family-members">
        {[family.grandRelation, family.relation].map(([label, people], i) => (
          <li key={label} style={{ '--i': i }}>
            <span className="family-role">{label}</span>
            {people.map((p, j) => (
              <span key={p} className="family-name">{p}{j < people.length - 1 && <span className="family-and"> &</span>}</span>
            ))}
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
