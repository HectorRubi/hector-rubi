import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { Project } from '@/types/project'
import { getTechObject } from '@/app/lib/stack/getTechObject'
import { StackItem } from '@/app/ui/components/stackItem'

export const Item = ({ project }: { project: Project }) => {
  return (
    <div>
      <div className="relative">
        <Image
          src={project.image}
          width={960}
          height={720}
          alt={project.name}
        />

        <div className="absolute right-0 top-0 bg-black px-3 py-2">
          <Link
            href={project.link}
            target="_blank"
            className="text-lg transition-colors hover:text-accent-600 dark:hover:text-accent-400"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex flex-wrap justify-center bg-black bg-opacity-60 py-2">
          {project.stack &&
            project.stack.map((stackElement, index) => {
              const stack = getTechObject(stackElement)
              return stack && <StackItem key={index} stack={stack} />
            })}
        </div>
      </div>

      <div className="py-5">
        <h3 className="md:text-lg lg:text-xl">{project.name}</h3>
        <p className="text-secondary-600 dark:text-secondary-400">
          {project.description}
        </p>
      </div>
    </div>
  )
}
