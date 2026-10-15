// Welcome screen; its button is the tap that lets the browser start the music
export default function Welcome({ bride, groom, closing, onOpen }) {
  return (
    <div className={`welcome${closing ? ' closing' : ''}`}>
      <div className="welcome-card">
        <p className="welcome-mantra">॥ श्री गणेशाय नमः ॥</p>
        <h1 className="welcome-names">{groom} <span className="weds">weds</span> {bride}</h1>
        <p className="welcome-vivah">शुभ विवाह</p>
        <p className="welcome-sub">You are cordially invited</p>
        <button className="welcome-btn" onClick={onOpen}>
          <span className="welcome-sparkle" aria-hidden="true">✦</span>
          Open Invitation
          <span className="welcome-sparkle" aria-hidden="true">✦</span>
        </button>
      </div>
    </div>
  )
}
