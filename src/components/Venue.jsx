import { wedding } from '../config.js'

export default function Venue() {
  const q = encodeURIComponent(wedding.venue.mapQuery)
  return (
    <section id="venue" className="section">
      <h2 className="section-title">Venue</h2>
      <p className="venue-name">{wedding.venue.name}</p>
      <p className="venue-address">{wedding.venue.address}</p>
      <div className="map">
        <iframe
          title="Venue map"
          src={`https://maps.google.com/maps?q=${q}&output=embed`}
          loading="lazy"
        />
      </div>
      <a className="btn" href={`https://www.google.com/maps/search/?api=1&query=${q}`} target="_blank" rel="noreferrer">
        Get Directions
      </a>
    </section>
  )
}
