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
      'https://lh3.google.com/u/0/d/1sULl7UXPHQnUelleVCVHzugHvBm5Jw6h=w2560-h1308-iv1',
    link: 'https://hectorrubi.github.io/tic-tac-toe-javascript/',
  },
  {
    name: 'Skolar',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    image:
      'https://hectorrubi.github.io/hector-rubi/src/images/project-skolar-bg.jpg',
    link: 'https://skolar.mx',
  },
  {
    name: 'Cremapet',
    stack: ['HTML', 'CSS', 'Bootstrap'],
    image:
      'https://hectorrubi.github.io/hector-rubi/src/images/project-cremapet-bg.jpg',
    link: 'https://skolar.mx',
  },
]

export const LatestWorks = () => {
  return (
    <section className="bg-slate-300 dark:bg-slate-800">
      <div
        className={`${CONTAINER} grid md:grid-rows-4 grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-12 md:gap-y-24 px-5 py-36`}
      >
        <div className="row-span-1 mb-5 md:flex md:flex-col md:justify-center">
          <h2 className="text-2xl md:text-4xl">Latest Works</h2>
          <p className="text-xs md:text-sm text-zinc-300">
            Perfect solutions for digital experience
          </p>
        </div>

        {latestWorks.map((latestWork, latestWorkKey) => (
          <article
            key={latestWorkKey}
            className="row-span-2 relative overflow-hidden rounded-lg bg-slate-900 shadow-black transition-all hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center px-10 py-10 relative">
              <h3 className="text-xl text-zinc-100 md:text-3xl mb-2">
                <a href={latestWork.link} target="_blank">
                  {latestWork.name}
                </a>
              </h3>
              <p className="mb-4">
                {latestWork.stack.map((tech, techKey) => (
                  <span
                    key={techKey}
                    className="inline-block bg-zinc-500 px-2 py-1 mb-1 text-xs text-zinc-300 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </p>
            </div>
            <figure className="translate-x-10">
              <img
                className="rounded-lg w-full"
                src={latestWork.image}
                alt="skolar"
              />
            </figure>
          </article>
        ))}

        <div className="row-span-1 mb-5 md:flex md:flex-col md:justify-center">
          <h2 className="text-2xl md:text-4xl">All Projects</h2>
          <p className="text-xs md:text-sm text-zinc-300">
            * Some projects not allow publish by NDA
            <br />
            If you want to see more, contact.
          </p>
        </div>
      </div>
    </section>
  )
}
