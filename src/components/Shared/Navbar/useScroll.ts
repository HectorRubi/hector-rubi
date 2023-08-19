import { useState, useRef, useEffect } from 'react'

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0)

  const onScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return {
    scrollY,
  }
}
