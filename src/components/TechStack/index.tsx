import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { stack } from '@/data/stack'

export const TechStack = () => {
  return (
    <section className="bg-primary-300 py-20 dark:bg-primary-800 md:py-36">
      <div className="container mx-auto grid grid-cols-3 items-center justify-center gap-10 px-2 sm:grid-cols-5 md:grid-cols-7">
        {stack.map((tech, index) => (
          <div
            key={index}
            className="flex cursor-pointer flex-col items-center text-secondary-600 transition-colors hover:text-white"
          >
            {tech.icon && (
              <FontAwesomeIcon
                icon={tech.icon as IconDefinition}
                className="text-4xl"
              />
            )}
            {tech.element && <tech.element className="w-9" />}
            <span className="text-sm">{tech.text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
