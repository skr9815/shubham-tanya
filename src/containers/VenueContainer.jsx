import { useCallback, useState } from 'react'
import { wedding } from '../config.js'
import useFileAvailable from '../hooks/useFileAvailable.js'
import useVideoOverlay from '../hooks/useVideoOverlay.js'
import Venue from '../components/Venue.jsx'
import InvitationCards from '../components/InvitationCards.jsx'
import VideoOverlay from '../components/VideoOverlay.jsx'

function VideoOverlayContainer({ src, onClose }) {
  useVideoOverlay(onClose)
  return <VideoOverlay src={src} onClose={onClose} />
}

export default function VenueContainer() {
  const url = wedding.invitationCard
  const ready = useFileAvailable(url)
  const fileName = `Shubham-Tanya-Invitation${url ? url.slice(url.lastIndexOf('.')) : ''}`

  const video = wedding.digitalInvitation
  const [videoOpen, setVideoOpen] = useState(false)
  const closeVideo = useCallback(() => setVideoOpen(false), [])

  return (
    <Venue venues={wedding.venues}>
      <InvitationCards
        printed={{ url, ready, fileName }}
        digital={{
          url: video,
          isFile: /\.(mp4|webm|mov|m4v)$/i.test(video),
          onWatch: () => setVideoOpen(true),
          overlay: videoOpen && <VideoOverlayContainer src={video} onClose={closeVideo} />,
        }}
        galleryUrl={wedding.photoGallery}
      />
    </Venue>
  )
}
