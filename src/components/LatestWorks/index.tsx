import Image from 'next/image'
import { CONTAINER } from '../constants'

type LatestWorks = {
  name: string
  stack: string[]
  image: string
  link: string
}

const latestWorks: LatestWorks[] = [
  {
    name: 'Tic Tac Toe Game',
    stack: ['HTML', 'CSS', 'JavaScript', 'POO'],
    image:
      'https://github.com/HectorRubi/hector-rubi/assets/68661875/2720d4a1-9a2d-462b-a317-0b3ccd97b07a',
    link: 'https://hectorrubi.github.io/tic-tac-toe-javascript/',
  },
  {
    name: 'Skolar',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    image:
      'https://github.com/HectorRubi/hector-rubi/assets/68661875/bccea143-b1c7-4477-871c-f72d09615581',
    link: 'https://skolar.mx',
  },
  {
    name: 'Cremapet',
    stack: ['HTML', 'CSS', 'Bootstrap'],
    image:
      'https://github.com/HectorRubi/hector-rubi/assets/68661875/19d19c7b-ed9c-41e2-a643-7af70f910f64',
    link: 'https://www.cremapet.com/',
  },
]

export const LatestWorks = () => {
  return (
    <section className="bg-primary-400 dark:bg-primary-900">
      <div
        className={`${CONTAINER} grid grid-cols-1 gap-10 px-5 py-36 lg:grid-cols-2 lg:grid-rows-4 lg:gap-x-12 lg:gap-y-24`}
      >
        <div className="row-span-1 mb-5 md:flex md:flex-col md:justify-center lg:ml-20">
          <h2 className="mb-5 text-2xl md:text-3xl">Latest Works</h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-400">
            Perfect solutions for digital experience
          </p>
        </div>

        {latestWorks.map((latestWork, latestWorkKey) => (
          <article
            key={latestWorkKey}
            className="group row-span-2 flex flex-col justify-between overflow-hidden rounded-lg bg-primary-500 transition-all hover:-translate-y-1 hover:bg-primary-300 hover:shadow-2xl hover:shadow-black/80 dark:bg-primary-800 dark:hover:bg-primary-700"
          >
            <div className="flex flex-col gap-5 px-5 py-10 sm:px-10 md:px-14 md:py-16 xl:flex-row xl:items-center xl:justify-between">
              <h3 className="text-xl md:text-2xl lg:text-3xl">
                <a
                  href={latestWork.link}
                  target="_blank"
                  className="transition-all hover:text-accent-600 hover:underline hover:underline-offset-8 dark:hover:text-accent-500"
                >
                  {latestWork.name}
                </a>
              </h3>

              <p className="flex flex-wrap gap-3">
                {latestWork.stack.map((tech, techKey) => (
                  <span
                    key={techKey}
                    className="rounded bg-accent-600 px-2 py-1 text-xs text-white shadow"
                  >
                    {tech}
                  </span>
                ))}
              </p>
            </div>

            <figure className="relative after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:bg-black after:opacity-30 after:transition-all group-hover:after:opacity-0">
              <Image
                className="object-cover lg:rounded"
                src={latestWork.image}
                alt={latestWork.name}
                width={1920}
                height={1080}
              />
            </figure>
          </article>
        ))}

        <div className="row-span-1 mb-5 md:flex md:flex-col md:justify-center lg:ml-20">
          <h2 className="mb-5 text-2xl">
            <a
              href="#"
              className="transition-all hover:text-accent-400 hover:underline hover:underline-offset-8 dark:hover:text-accent-500"
            >
              All Projects
            </a>
          </h2>
          <p className="leading-8 text-secondary-600 dark:text-secondary-400">
            * Some projects not allow publish by NDA
            <br />
            If you want to see more, contact.
          </p>
        </div>
      </div>
    </section>
  )
}
