import Image from 'next/image'
import { Project as ProjectType } from '../../../types/project'

export const Project = ({ project }: { project: ProjectType }) => {
  return (
    <article className="group row-span-2 flex flex-col justify-between overflow-hidden rounded-lg bg-primary-500 transition-all hover:-translate-y-1 hover:bg-primary-300 hover:shadow-2xl hover:shadow-black/80 dark:bg-primary-800 dark:hover:bg-primary-700">
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
  )
}
