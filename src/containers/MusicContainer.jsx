import { wedding } from '../config.js'
import useBackgroundMusic from '../hooks/useBackgroundMusic.js'
import useBodyScrollLock from '../hooks/useBodyScrollLock.js'
import useWelcomeTransition from '../animations/useWelcomeTransition.js'
import useScrolledPast from '../animations/useScrolledPast.js'
import Welcome from '../components/Welcome.jsx'
import ScrollArrow from '../components/ScrollArrow.jsx'
import MusicToggle from '../components/MusicToggle.jsx'

// The song plays this many times in a row, then stops (the music button can start it again)
const MAX_PLAYS = 3

function ScrollArrowContainer() {
  // Fades away on the first scroll
  return <ScrollArrow hidden={useScrolledPast(60)} />
}

// Welcome screen, background music and the bits that appear once the invitation is opened
export default function MusicContainer() {
  const welcome = useWelcomeTransition()
  // If the browser allows autoplay (e.g. on repeat visits), skip the welcome screen
  const music = useBackgroundMusic({ maxPlays: MAX_PLAYS, volume: 0.4, onAutoplay: welcome.skip })
  useBodyScrollLock(!welcome.opened)

  // Browsers only allow sound after a tap, so the welcome screen's button starts the music
  const open = () => { if (welcome.open()) music.play() }

  return (
    <>
      <audio src="/music/jodha_flute.mp3" preload="auto" {...music.audioProps} />
      {!welcome.opened && <Welcome bride={wedding.bride} groom={wedding.groom} closing={welcome.closing} onOpen={open} />}
      {welcome.opened && <ScrollArrowContainer />}
      {welcome.opened && <MusicToggle playing={music.playing} onToggle={music.toggle} />}
    </>
  )
}
