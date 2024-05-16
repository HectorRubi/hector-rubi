import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CONTAINER } from '@/app/ui/constants'
import { skills } from '@/data/skills'

export const Description = () => {
  return (
    <section className="bg-gradient-radial-center from-primary-400/50 to-primary-400 dark:from-primary-800 dark:to-primary-900">
      <div
        className={`${CONTAINER} flex flex-col-reverse py-20 md:flex-row md:py-36`}
      >
        <div className="md:w-1/2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="mb-2 rounded-lg bg-primary-300 p-10 shadow-none transition-all hover:z-10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 dark:bg-primary-800 dark:shadow-white"
            >
              <div className="flex items-center justify-between text-xl text-accent-600 drop-shadow-sm dark:text-accent-400 lg:text-2xl">
                <h3 className="relative mb-2">{skill.name}</h3>
                <span>
                  <FontAwesomeIcon icon={skill.icon} />
                </span>
              </div>
              <p className="mb-8 text-base text-secondary-600 dark:text-secondary-400">
                {skill.description}
              </p>
              <p className="text-sm">{`${skill.stat} Project${
                skill.stat > 1 ? 's' : ''
              }`}</p>
            </div>
          ))}
        </div>

        <div className="mb-16 md:mb-0 md:w-1/2 md:px-10 lg:px-20 xl:px-28 2xl:px-40">
          <h2 className="mb-8 text-secondary-600 dark:text-secondary-400">
            Description
          </h2>
          <h1 className="text-bold mb-12 text-4xl xl:text-5xl">
            Hello! I&apos;m Hector Rubí
          </h1>
          <p className="mb-8 text-2xl italic text-secondary-800 dark:text-secondary-200">
            Every great software begin with an even better idea
          </p>
          <p className="text-lg text-secondary-600 dark:text-secondary-400">
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
