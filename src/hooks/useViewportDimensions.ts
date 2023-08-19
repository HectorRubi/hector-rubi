import { useEffect, useState } from 'react'

export const useViewportDimensions = () => {
  let defaultValue = { width: 0, height: 0 }

  if (typeof window !== 'undefined') {
    defaultValue = {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }

  const [viewport, setViewport] = useState(defaultValue)
  const [isResized, setIsResized] = useState(false)

  const handleResize = () => {
    setIsResized(!isResized)
    setViewport({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return {
    viewport,
    isResized,
  }
}
