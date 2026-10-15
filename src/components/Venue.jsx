// `children` sits below the maps (the invitation cards)
export default function Venue({ venues, children }) {
  return (
    <section id="venue" className="section">
      <h2 className="section-title">Venues</h2>
      <div className="venues">
        {venues.map((v) => (
          <div key={v.mapLink} className="venue">
            <p className="venue-label">{v.label}</p>
            <p className="venue-name">{v.name}</p>
            <p className="venue-address">{v.address}</p>
            <div className="map">
              <iframe
                title={`Map of ${v.name}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(v.mapQuery)}&output=embed`}
                loading="lazy"
              />
            </div>
            <a className="btn" href={v.mapLink} target="_blank" rel="noreferrer">Open in Google Maps</a>
          </div>
        ))}
      </div>
      {children}
    </section>
  )
}
