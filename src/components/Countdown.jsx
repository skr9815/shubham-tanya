export default function Countdown({ timeLeft, done }) {
  return (
    <section className="countdown">
      <h2 className="section-title">{done ? 'Just Married!' : 'Counting Down To Forever'}</h2>
      {!done && (
        <div className="timer">
          {Object.entries(timeLeft).map(([label, value], i) => (
            <div key={label} className={`timer-box ${label.toLowerCase()}`} style={{ '--i': i }}>
              {/* Keyed on the value so each new number rolls in */}
              <span key={value} className="timer-num">{String(value).padStart(2, '0')}</span>
              <span className="timer-label">{label}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
