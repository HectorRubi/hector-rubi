import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons'

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
    <nav className="bg-slate-400 dark:bg-slate-900">
      <div className={`${CONTAINER} flex justify-between items-center py-16`}>
        <h3 className="text-2xl">
          <span>Hector </span>
          <span className="text-zinc-600 dark:text-zinc-500">Rubí</span>
        </h3>

        <ul className="flex gap-5">
          {links.map((link, linkKey) => (
            <li key={linkKey}>
              <a
                href={link.url}
                target="_blank"
                className="group flex items-center text-sm hover:text-amber-400 dark:hover:text-amber-500 transition-all"
              >
                <FontAwesomeIcon
                  icon={link.icon}
                  className="inline-block text-lg mr-2"
                />
                <span className="inline-block text-zinc-600 dark:text-zinc-500 group-hover:text-amber-400 dark:group-hover:text-amber-500 transition-all">
                  {link.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
