import { RefObject, useEffect, useState } from 'react'
import { useViewportDimensions } from './../../../hooks/useViewportDimensions'

export const useDimensions = (divRef: RefObject<HTMLDivElement>) => {
  const [dimensions, setDimensions] = useState({ width: 0 })
  const { isResized } = useViewportDimensions()

  useEffect(() => {
    if (divRef.current) {
      setDimensions({
        width: divRef.current?.offsetWidth || 0,
      })
    }
  }, [isResized, divRef])

  return {
    dimensions,
  }
}
