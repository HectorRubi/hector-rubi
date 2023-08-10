import Image from 'next/image'

import { CONTAINER } from '../constants'
import { projects } from '../../data/projects'

export const LatestWorks = () => {
  return (
    <section className="bg-gradient-radial-right from-primary-400/50 to-primary-400 dark:from-primary-800 dark:to-primary-900">
      <div
        className={`${CONTAINER} grid grid-cols-1 gap-10 px-5 py-36 lg:grid-cols-2 lg:grid-rows-4 lg:gap-x-12 lg:gap-y-24`}
      >
        <div className="row-span-1 mb-5 md:flex md:flex-col md:justify-center lg:ml-20">
          <h2 className="mb-5 text-2xl md:text-3xl">Latest Works</h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-400">
            Perfect solutions for digital experience
          </p>
        </div>

        {projects.map((project, projectIndex) => (
          <article
            key={projectIndex}
            className="group row-span-2 flex flex-col justify-between overflow-hidden rounded-lg bg-primary-500 transition-all hover:-translate-y-1 hover:bg-primary-300 hover:shadow-2xl hover:shadow-black/80 dark:bg-primary-800 dark:hover:bg-primary-700"
          >
            <div className="flex flex-col gap-5 px-5 py-10 sm:px-10 md:px-14 md:py-16 xl:flex-row xl:items-center xl:justify-between">
              <h3 className="text-xl md:text-2xl lg:text-3xl">
                <a
                  href={project.link}
                  target="_blank"
                  className="transition-all hover:text-accent-600 hover:underline hover:underline-offset-8 dark:hover:text-accent-500"
                >
                  {project.name}
                </a>
              </h3>

              <p className="flex flex-wrap gap-3">
                {project.stack.map((tech, techKey) => (
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
                src={project.image}
                alt={project.name}
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
