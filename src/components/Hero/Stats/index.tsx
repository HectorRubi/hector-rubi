type Stats = {
  size: number
  text: string[]
}

const stats: Stats[] = [
  {
    size: 4,
    text: ['YEARS', 'EXPERIENCE'],
  },
  {
    size: 10,
    text: ['PROJECTS COMPLETED', 'ON 1 COUNTRIES'],
  },
]

export const Stats = () => {
  return (
    <div className="mb-20 flex gap-10">
      {stats.map((stat, index) => (
        <p key={index} className="flex gap-4">
          <span className="text-5xl">{stat.size}</span>
          <span className="text-xs leading-loose text-zinc-500 dark:text-zinc-400">
            {stat.text.map((textLine) => (
              <>
                {textLine}
                <br />
              </>
            ))}
          </span>
        </p>
      ))}
    </div>
  )
}
