import { useEffect, useState } from 'react'

export const useCounterAnimate = (value: number) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count < value) {
      const interval = setInterval(() => {
        setCount(count + 1)
      }, 80)

      return () => {
        clearInterval(interval)
      }
    }
  }, [count, value])

  return {
    count,
  }
}
