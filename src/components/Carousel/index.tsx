import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { Stack } from '@/types/stack'

export const Carousel = ({
  inverse = false,
  className = '',
  stack,
}: {
  inverse?: boolean
  className?: string
  stack: Stack[]
}) => {
  const data = stack.length > 10 ? stack.slice(0, 10) : stack
  const sections = [[...data], [...data]]

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`flex w-full ${
          inverse ? 'animate-carousel-inverse justify-end' : 'animate-carousel'
        }`}
      >
        {sections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="flex w-full shrink-0 justify-around"
          >
            {section.map((tech, index) => (
              <div
                key={index}
                className="flex max-w-[10%] cursor-pointer flex-col items-center px-1 text-secondary-400 transition-colors hover:text-black dark:text-secondary-600 dark:hover:text-white"
              >
                {tech.icon && (
                  <FontAwesomeIcon
                    icon={tech.icon as IconDefinition}
                    className="text-2xl sm:text-3xl"
                  />
                )}
                {tech.element && <tech.element className="w-6 sm:w-8" />}
                <span className="hidden text-[10px] sm:block">{tech.text}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
