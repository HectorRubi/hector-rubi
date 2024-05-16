import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { CONTAINER } from '@/app/ui/constants'
import { contactLinks } from '@/data/contact-links'

export const Footer = () => {
  return (
    <footer className="bg-primary-200 dark:bg-primary-950">
      <div
        className={`${CONTAINER} flex flex-col py-36 md:flex-row md:justify-between`}
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

      <div className={`${CONTAINER} flex flex-wrap justify-between py-5`}>
        <h3 className="text-xl">
          <span>Hector </span>
          <span className="text-secondary-600 dark:text-secondary-400">
            Rubí
          </span>
        </h3>

        <ul className="flex gap-3">
          {contactLinks.map((link, linkIndex) => (
            <li key={linkIndex}>
              <a href={link.url} className="group">
                <FontAwesomeIcon
                  icon={link.icon}
                  className={`transition-all group-hover:text-accent-600 dark:group-hover:text-accent-400`}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
