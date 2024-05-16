'use client'
import { Stat as StatType } from '@/types/stat'
import { useCounterAnimate } from '@/app/ui/hooks/useCounterAnimate'

export const Stats = ({ stat }: { stat: StatType }) => {
  const { count } = useCounterAnimate(stat.size)

  return (
    <p className="flex gap-4">
      <span className="text-5xl">{count}</span>
      <span className="text-xs leading-loose text-secondary-500 dark:text-secondary-400">
        {stat.text.map((textLine, index) => (
          <span key={index}>
            {textLine}
            <br />
          </span>
        ))}
      </span>
    </p>
  )
}
