import { wedding } from '../config.js'
import useCountdown from '../hooks/useCountdown.js'
import Countdown from '../components/Countdown.jsx'

export default function CountdownContainer() {
  const { timeLeft, done } = useCountdown(wedding.date)
  return <Countdown timeLeft={timeLeft} done={done} />
}
