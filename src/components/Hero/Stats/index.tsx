import { stats } from '../../../data/stats'

export const Stats = () => {
  return (
    <div className="mb-20 flex gap-10">
      {stats.map((stat, index) => (
        <p key={index} className="flex gap-4">
          <span className="text-5xl">{stat.size}</span>
          <span className="text-xs leading-loose text-secondary-500 dark:text-secondary-400">
            {stat.text.map((textLine, index) => (
              <span key={index}>
                {textLine}
                <br />
              </span>
            ))}
          </span>
        </p>
      ))}
    </div>
  )
}
