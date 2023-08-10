import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { CONTAINER } from '../constants'

export const Information = () => {
  return (
    <section className="bg-primary-200 py-36 dark:bg-primary-950">
      <div
        className={`${CONTAINER} flex flex-col md:flex-row md:justify-between`}
      >
        <div className="mb-20 max-w-xl md:mb-0 xl:max-w-2xl">
          <p className="mb-8 text-2xl leading-loose md:text-4xl lg:text-5xl">
            Let&apos;s make something amazing together.
          </p>
          <p className="text-2xl lg:text-4xl">
            Start by{' '}
            <span className="text-accent-600 dark:text-accent-400">
              saying hi
            </span>
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xl text-secondary-400">Information</h3>
          <p className="flex items-center gap-3 text-base md:text-lg lg:text-xl">
            <FontAwesomeIcon icon={faEnvelope} />
            hector.rubi.garcia@outlook.com
          </p>
        </div>
      </div>
    </section>
  )
}
