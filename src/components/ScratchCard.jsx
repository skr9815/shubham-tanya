// Gold foil canvas laid over `children`; the scratching itself lives in animations/scratch
export default function ScratchCard({ label, revealed, twinkles, wrapRef, canvasRef, foilHandlers, children }) {
  return (
    <div ref={wrapRef} className={`scratch${revealed ? ' revealed' : ''}`}>
      <div className="scratch-content" aria-hidden={!revealed}>{children}</div>
      <canvas
        ref={canvasRef}
        className="scratch-foil"
        role="button"
        aria-label={label}
        tabIndex={0}
        {...foilHandlers}
      />
      {!revealed && twinkles.map((t, i) => (
        <span key={i} className="scratch-twinkle" aria-hidden="true"
          style={{ left: t.left, top: t.top, width: t.size, height: t.size, animationDelay: t.delay }} />
      ))}
    </div>
  )
}
