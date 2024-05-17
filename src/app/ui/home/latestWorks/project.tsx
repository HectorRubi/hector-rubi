import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { Project as ProjectType } from '@/types/project'
import { getTechObject } from '@/app/lib/stack/getTechObject'

const article = [
  'group relative row-span-2 overflow-hidden transition-all',
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
  'after:opacity-10 group-hover:after:opacity-0 dark:after:opacity-30 dark:group-hover:after:opacity-20',
]

const content = [
  'absolute bottom-0 left-0 right-0 top-0 md:!bottom-auto',
  // Padding
  'p-5 sm:p-8 md:p-10 lg:px-12 lg:py-14',
  // Flex mobile
  'flex flex-col items-center justify-center gap-5',
  // Flex tablet
  'md:items-start',
]

export const Project = ({ project }: { project: ProjectType }) => {
  return (
    <article className={article.join(' ')}>
      <figure className={figure.join(' ')}>
        <Image
          className="h-full w-full object-cover"
          src={project.image}
          alt={project.name}
          width={960}
          height={720}
        />
      </figure>

      <div className={content.join(' ')}>
        <h3 className="text-xl sm:text-2xl lg:text-3xl">{project.name}</h3>
        <div className="flex gap-2">
          {project.stack.map((stackItem, index) => {
            const stack = getTechObject(stackItem)
            return (
              stack && (
                <span
                  key={index}
                  className="rounded bg-accent-600 px-2 py-1 text-xs text-white shadow"
                >
                  {stack.text}
                </span>
              )
            )
          })}
        </div>
        <div className="absolute right-0 top-0 bg-black px-3 py-2">
          <Link
            href={project.link}
            target="_blank"
            className="text-lg transition-colors hover:text-accent-500"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </div>
      </div>
    </article>
  )
}
