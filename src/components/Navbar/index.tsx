import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons'

import { Tooltip } from './../Tooltip'

import { CONTAINER } from '../constants'

type Link = {
  name: string
  url: string
  icon: IconDefinition
}

const links: Link[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/HectorRubi',
    icon: faGithub,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hector-rubi-garcia/',
    icon: faLinkedin,
  },
]

export const Navbar = () => {
  return (
    <nav className="bg-primary-400 dark:bg-primary-900">
      <div className={`${CONTAINER} flex items-center justify-between py-16`}>
        <h3 className="text-2xl">
          <span>Hector </span>
          <span className="text-secondary-600 dark:text-secondary-500">
            Rubí
          </span>
        </h3>

        <ul className="flex items-center gap-5">
          {links.map((link, linkKey) => (
            <li key={linkKey}>
              <a
                href={link.url}
                target="_blank"
                className="group flex items-center"
              >
                <FontAwesomeIcon
                  icon={link.icon}
                  className={`mr-2 text-lg transition-all group-hover:text-accent-400`}
                />
                <span
                  className={`text-sm text-secondary-600 transition-all group-hover:text-accent-400 dark:text-secondary-500`}
                >
                  {link.name}
                </span>
              </a>
            </li>
          ))}

          <li className="group relative flex cursor-pointer items-center justify-center rounded-full bg-primary-300 px-3 py-3 transition-all hover:bg-primary-800 hover:text-accent-400 dark:bg-primary-800 dark:hover:bg-primary-600">
            <FontAwesomeIcon icon={faEnvelope} />
            <Tooltip text="hector.rubi.garcia@outlook.com" position="right" />
          </li>
        </ul>
      </div>
    </nav>
  )
}
