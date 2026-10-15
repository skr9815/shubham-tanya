// `dates`: [{ key, day, month, name, time, city, action }], where `action` is the add-to-calendar control
export default function SaveTheDate({ dates, calendar }) {
  return (
    <section id="calendar" className="section section-alt">
      <h2 className="section-title">Save the Dates</h2>
      <div className="save-layout">
        <div className="save-dates">
          {dates.map((d) => (
            <div key={d.key} className="save-date">
              <div className="save-date-day"><span>{d.day}</span>{d.month}</div>
              <div className="save-date-info">
                <p className="save-date-name">{d.name}</p>
                <p>{d.time} · {d.city}</p>
              </div>
              {d.action}
            </div>
          ))}
        </div>
        {calendar}
      </div>
    </section>
  )
}
