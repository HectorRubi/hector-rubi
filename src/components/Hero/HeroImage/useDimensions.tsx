import { RefObject, useEffect, useState } from 'react'

export const useDimensions = (divRef: RefObject<HTMLDivElement>) => {
  const [dimensions, setDimensions] = useState({ width: 0 })

  useEffect(() => {
    const getDimensions = () => ({
      width: divRef.current?.offsetWidth || 0,
    })

    const handleResize = () => {
      setDimensions(getDimensions())
    }

    if (divRef.current) {
      setDimensions(getDimensions())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [divRef])

  return {
    dimensions,
  }
}
