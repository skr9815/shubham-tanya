export default function AddToCalendar({ menuRef, open, onToggle, googleUrl, outlookUrl, onApple, onClose, className = '' }) {
  return (
    <div className={`add-cal ${className}`} ref={menuRef}>
      <button className="add-cal-btn" onClick={onToggle} aria-expanded={open}>📅 Add to Calendar</button>
      {open && (
        <div className="add-cal-menu">
          <a href={googleUrl} target="_blank" rel="noreferrer" onClick={onClose}>Google Calendar</a>
          <button onClick={onApple}>Apple Calendar</button>
          <a href={outlookUrl} target="_blank" rel="noreferrer" onClick={onClose}>Outlook</a>
        </div>
      )}
    </div>
  )
}
