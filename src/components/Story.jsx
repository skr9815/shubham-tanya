import { wedding } from '../config.js'

export default function Story() {
  return (
    <section id="story" className="section">
      <h2 className="section-title">Our Story</h2>
      <div className="timeline">
        {wedding.story.map((s) => (
          <div key={s.year} className="timeline-item">
            <span className="timeline-year">{s.year}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
