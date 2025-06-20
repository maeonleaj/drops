'use client'

import { useEffect } from 'react'

interface ScriptLoaderProps {
  id: string
}

export default function ScriptLoader({ id }: ScriptLoaderProps) {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://scripts.converteai.net/lib/js/smartplayer/v1/sdk.min.js'
    script.setAttribute('data-id', id)
    script.async = true
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [id])

  return null
}
