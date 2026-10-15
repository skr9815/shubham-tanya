import { wedding } from '../config.js'
import Footer from '../components/Footer.jsx'

export default function FooterContainer() {
  return (
    <Footer
      bride={wedding.bride}
      groom={wedding.groom}
      brideFamily={wedding.families.bride.title}
      groomFamily={wedding.families.groom.title}
      hashtag={wedding.hashtag}
    />
  )
}
