import { CONTAINER } from '../constants'
import { projects } from '../../data/projects'
import { Project } from './Project'

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

        {projects.map((project, projectIndex) => (
          <Project key={projectIndex} project={project} />
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
