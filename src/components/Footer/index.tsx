import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { CONTAINER } from '../constants'

export const Footer = () => {
  return (
    <footer className="bg-primary-200 py-5 dark:bg-primary-950">
      <div
        className={`${CONTAINER} flex flex-col md:flex-row md:justify-between`}
      >
        <h3 className="text-xl">
          <span>Hector </span>
          <span className="text-secondary-600 dark:text-secondary-400">
            Rubí
          </span>
        </h3>

        <ul className="flex gap-3">
          <li>
            <a
              href="https://www.linkedin.com/in/hector-rubi-garcia/"
              className="group"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className={`transition-all group-hover:text-accent-600 dark:group-hover:text-accent-400`}
              />
            </a>
          </li>

          <li>
            <a href="https://github.com/HectorRubi" className="group">
              <FontAwesomeIcon
                icon={faGithub}
                className={`transition-all group-hover:text-accent-600 dark:group-hover:text-accent-400`}
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
