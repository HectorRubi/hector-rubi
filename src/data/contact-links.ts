import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import { ContactLink } from '../types/contact-link'

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
