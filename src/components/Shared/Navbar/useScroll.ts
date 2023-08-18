import { useState, useRef, useEffect } from 'react'

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0)
  const navRef = useRef<HTMLElement>(null)
  const navHeight = useRef(navRef.current?.clientHeight ?? 0)

  const onScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    navHeight.current = navRef.current?.clientHeight ?? 0

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return {
    scrollY,
    navHeight,
    navRef,
  }
}
