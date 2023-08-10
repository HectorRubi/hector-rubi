import {
  faLinkedin,
  faGithub,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons'

export type ContactLink = {
  name: string
  url: string
  icon: IconDefinition
}

export const contactLinks: ContactLink[] = [
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
