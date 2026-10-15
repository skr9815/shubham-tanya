import { useEffect, useState } from 'react'

// True once `url` is confirmed to exist on the server
export default function useFileAvailable(url) {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    if (!url) return
    // Missing files come back as the site's own HTML page, so check the type as well as the status
    fetch(url, { method: 'HEAD' })
      .then((res) => setReady(res.ok && !(res.headers.get('content-type') || '').includes('text/html')))
      .catch(() => setReady(false))
  }, [url])
  return ready
}
