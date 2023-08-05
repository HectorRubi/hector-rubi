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
    <section className="bg-slate-300 dark:bg-slate-800">
      <div className={`${CONTAINER} flex flex-col md:flex-row`}>
        <div className="md:w-1/2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-400 dark:bg-slate-900 p-10 rounded-lg mb-2 shadow-none hover:shadow-2xl shadow-black dark:shadow-white transition-all hover:-translate-y-1 hover:z-10"
            >
              <h3 className="relative text-xl text-blue-800 dark:text-blue-400 mb-2">
                {skill.name}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                {skill.description}
              </p>
              <p className="text-sm">{skill.stat}</p>
            </div>
          ))}
        </div>
        <div className="md:w-1/2 px-40 mb-8 md:mb-0">
          <h2 className="text-zinc-600 dark:text-zinc-400 mb-8">Introduce</h2>
          <h3 className="text-2xl md:text-4xl text-bold mb-12">
            Hello! I&apos;m Hector Rubí
          </h3>
          <p className="mb-8 italic text-2xl text-zinc-800 dark:text-zinc-200">
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
