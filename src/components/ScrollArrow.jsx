// Gold chevrons cascading downward at the bottom of the screen; `hidden` fades them away
export default function ScrollArrow({ hidden }) {
  return (
    <div className={`scroll-arrow${hidden ? ' gone' : ''}`} aria-hidden="true">
      <i /><i /><i />
    </div>
  )
}
