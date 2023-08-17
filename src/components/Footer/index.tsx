import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { CONTAINER } from '../constants'
import { contactLinks } from '../../data/contact-links'

export const Footer = () => {
  return (
    <footer className="bg-primary-200 py-5 dark:bg-primary-950">
      <div className={`${CONTAINER} flex flex-wrap justify-between`}>
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
