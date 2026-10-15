export default function Nav({ initials, links, open, onToggle, onNavigate }) {
  return (
    <nav className="nav">
      <a href="#home" className="nav-logo">{initials[0]} & {initials[1]}</a>
      <button className="nav-toggle" aria-label="Menu" onClick={onToggle}>☰</button>
      <ul className={open ? 'open' : ''}>
        {links.map(([id, label]) => (
          <li key={id}><a href={`#${id}`} onClick={onNavigate}>{label}</a></li>
        ))}
      </ul>
    </nav>
  )
}
