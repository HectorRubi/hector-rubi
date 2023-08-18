import Link from 'next/link'
import { projects } from '@/data/projects'
import { CONTAINER } from '@/components/constants'
import { Project } from './Project'

export const LatestWorks = () => {
  return (
    <section className="bg-primary-400 bg-shape-light bg-bottom bg-no-repeat dark:bg-primary-900 dark:bg-shape-dark">
      <div
        className={`${CONTAINER} grid grid-cols-1 gap-10 px-5 py-20 md:grid-cols-2 md:py-36 lg:grid-rows-4 lg:gap-x-12 lg:gap-y-24`}
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

        <div className="row-span-1 my-5 md:flex md:flex-col md:justify-center lg:ml-20">
          <Link href="/projects" className="mb-5 text-2xl hover:underline">
            All Projects
          </Link>
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
