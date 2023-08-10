import { CONTAINER } from '../constants'

type Skills = {
  name: string
  description: string
  stat: string
  icon: string
}

const skills: Skills[] = [
  {
    name: 'Front-End',
    description: 'Create web pages with coding super smooth.',
    stat: '10 Projects',
    icon: 'fa-solid fa-code',
  },
  {
    name: 'Back-End',
    description: 'I develop back-end with smart thinking.',
    stat: '5 Projects',
    icon: 'fa-solid fa-terminal',
  },
  {
    name: 'Database',
    description: 'I know store data on easy way.',
    stat: '1 Projects',
    icon: 'fa-solid fa-database',
  },
]

export const Description = () => {
  return (
    <section className="bg-primary-400 dark:bg-primary-900">
      <div className={`${CONTAINER} flex flex-col py-36 md:flex-row`}>
        <div className="md:w-1/2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="mb-2 rounded-lg bg-primary-300 p-10 shadow-none transition-all hover:z-10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 dark:bg-primary-800 dark:shadow-white"
            >
              <h3 className="relative mb-2 text-xl text-accent-600 drop-shadow-sm dark:text-accent-400">
                {skill.name}
              </h3>
              <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                {skill.description}
              </p>
              <p className="text-sm">{skill.stat}</p>
            </div>
          ))}
        </div>
        <div className="mb-8 px-40 md:mb-0 md:w-1/2">
          <h2 className="mb-8 text-zinc-600 dark:text-zinc-400">Introduce</h2>
          <h3 className="text-bold mb-12 text-2xl md:text-4xl">
            Hello! I&apos;m Hector Rubí
          </h3>
          <p className="mb-8 text-2xl italic text-zinc-800 dark:text-zinc-200">
            Every great software begin with an even better idea
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            Since beginning my journey nearly 4 years ago, I&apos;ve work for
            different companies and collaborated with talented people to create
            digital products. I&apos;m curious, keep permanently learning and
            trying to improve myself everyday.
          </p>
        </div>
      </div>
    </section>
  )
}
