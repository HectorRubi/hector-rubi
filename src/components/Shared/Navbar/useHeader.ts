import { useEffect, useRef, useState } from 'react'
import { NavState } from '@/types/nav-state'
import { useViewportDimensions } from '@/app/ui/hooks/useViewportDimensions'
import { useScroll } from './useScroll'

export const useHeader = () => {
  const [navState, setNavState] = useState<NavState>('initial')

  const navRef = useRef<HTMLElement>(null)
  const navHeight = useRef(navRef.current?.clientHeight ?? 0)

  const { viewport } = useViewportDimensions()
  const { scrollY } = useScroll()

  useEffect(() => {
    navHeight.current = navRef.current?.clientHeight ?? 0
  }, [])

  useEffect(() => {
    if (scrollY <= navHeight.current) {
      setNavState('initial')
    }
    if (scrollY > navHeight.current) {
      setNavState('hiding')
    }
    if (scrollY >= viewport.height / 2) {
      setNavState('hiding-middle')
    }
    if (scrollY > viewport.height) {
      setNavState('visible')
    }
  }, [scrollY, navHeight, viewport])

  return {
    navState,
    navRef,
  }
}
