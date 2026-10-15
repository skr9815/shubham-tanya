export default function MusicToggle({ playing, onToggle }) {
  const label = playing ? 'Turn music off' : 'Turn music on'
  return (
    <button className={`music-toggle${playing ? ' playing' : ''}`} onClick={onToggle} aria-label={label} title={label}>
      {playing ? '♫' : '🔇'}
    </button>
  )
}
