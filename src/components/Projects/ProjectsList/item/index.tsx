import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { Project } from '@/types/project'

export const Item = ({
  project,
  inverse,
}: {
  project: Project
  inverse?: boolean
}) => {
  return (
    <div
      className={`mb-8 flex flex-col-reverse items-stretch justify-between gap-8 rounded-lg bg-primary-300 p-4 dark:bg-primary-800 md:flex-col-reverse ${
        inverse ? 'sm:flex-row-reverse' : 'sm:flex-row'
      }`}
    >
      <div className="sm:max-w-[18rem] md:max-w-none">
        <Image
          src={project.image}
          width={960}
          height={720}
          alt="Image"
          className="sm:h-full sm:object-cover"
        ></Image>
      </div>

      <div className="w-full">
        <h3 className="mb-4 flex items-center justify-between">
          <span className="mr-4 text-2xl">{project.name}</span>
          <span className="text-sm">
            <Link
              href={project.link}
              target="_blank"
              className="transition-colors hover:text-accent-600 dark:hover:text-accent-400"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </span>
        </h3>

        <p className="mb-4">
          <span className="mr-2 block">Made with:</span>
        </p>

        <div className="mb-4 flex flex-wrap">
          {project.stack.map((tech, index) => (
            <span
              key={index}
              className="mr-2 inline-flex cursor-pointer flex-col items-center justify-center text-secondary-600 hover:text-black dark:text-secondary-400 dark:hover:text-white"
            >
              <span>
                {tech.icon && (
                  <FontAwesomeIcon
                    icon={tech.icon}
                    className="text-2xl lg:text-3xl"
                  />
                )}
                {tech.element && <tech.element className="w-7 lg:w-8" />}
              </span>
              <span className="text-[0.6rem]">{tech.text}</span>
            </span>
          ))}
        </div>

        <p>{project.description}</p>
      </div>
    </div>
  )
}
