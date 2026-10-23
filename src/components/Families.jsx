import { Mandala } from './Decor.jsx'

function FamilyCard({ side, name, family, sparkles }) {
  return (
    <article className={`family-card ${side}`}>
      <span className="family-crest" aria-hidden="true"><Mandala size={58} /></span>
      <span className="family-sparkles" aria-hidden="true">
        {sparkles.map(([top, left], i) => (
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

export default function Families({ sectionRef, visible, bride, groom, sparkles }) {
  return (
    <section id="family" ref={sectionRef} className={`section families-section${visible ? ' in' : ''}`}>
      <h2 className="section-title">Our Families</h2>
      <p className="subtitle">दो परिवार, एक बंधन</p>
      <div className="families">
        <FamilyCard side="groom" name={groom.name} family={groom.family} sparkles={sparkles} />
        <div className="family-union" aria-hidden="true">
          {/* Gathbandhan: the two families' dupattas tied together */}
          <img className="family-knot" src="/images/gathbandhan.webp" alt="" />
        </div>
        <FamilyCard side="bride" name={bride.name} family={bride.family} sparkles={sparkles} />
      </div>
    </section>
  )
}
