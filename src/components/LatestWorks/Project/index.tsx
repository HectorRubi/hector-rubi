import Image from 'next/image'
import { Project as ProjectType } from '../../../types/project'

const article = [
  'group relative row-span-2 overflow-hidden rounded-lg transition-all',
  // Flex
  'flex flex-col justify-between',
  // Hover
  'hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/80',
  // Height
  'min-h-[200px] sm:min-h-[300px] lg:min-h-[400px] xl:min-h-[540px]',
]

const figure = [
  'absolute bottom-0 left-0 right-0 top-0',
  // After definition
  'after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0',
  // After general
  'after:bg-black after:transition-opacity',
  // After opacity
  'after:opacity-30 group-hover:after:opacity-10',
]

const content = [
  'absolute bottom-0 left-0 right-0 top-0 md:bottom-auto',
  // Padding
  'p-5 sm:p-8 md:p-10 lg:px-12 lg:py-14',
  // Flex mobile
  'flex flex-col items-center justify-center gap-5',
  // Flex tablet
  'md:items-start',
  // Flex desktop
  'xl:flex-row xl:items-center xl:justify-between',
]

export const Project = ({ project }: { project: ProjectType }) => {
  return (
    <article className={article.join(' ')}>
      <figure className={figure.join(' ')}>
        <Image
          className="h-full w-full object-cover lg:rounded"
          src={project.image}
          alt={project.name}
          width={960}
          height={720}
        />
      </figure>

      <div className={content.join(' ')}>
        <h3 className="text-xl sm:text-2xl lg:text-3xl">
          <a
            href={project.link}
            target="_blank"
            className="transition-all hover:underline hover:underline-offset-8"
          >
            {project.name}
          </a>
        </h3>

        <p className="flex flex-wrap gap-3 xl:max-w-[40%] 2xl:max-w-[50%]">
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
    </article>
  )
}
