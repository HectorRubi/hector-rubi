import {
  faHtml5,
  faCss3,
  faJs,
  faAngular,
  faReact,
  faBootstrap,
  faNode,
  faPython,
  faDocker,
  faAws,
  faGithub,
  faGitlab,
  faGitAlt,
  faLinux,
  faSass,
  faPhp,
  faNpm,
  faLaravel,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

import { Stack } from '@/types/stack'

import {
  TypeScript,
  Postman,
  Sequelize,
  Express,
  MySQL,
  PostgreSQL,
  Tailwind,
  NextJS,
} from '@/icons'

export const stack: Stack[] = [
  {
    icon: faHtml5,
    text: 'HTML5',
  },
  {
    icon: faCss3,
    text: 'CSS3',
  },
  {
    element: Tailwind,
    text: 'Tailwind',
  },
  {
    icon: faJs,
    text: 'JavaScript',
  },
  {
    element: TypeScript,
    text: 'TypeScript',
  },
  {
    icon: faNpm,
    text: 'npm',
  },
  {
    icon: faGitAlt,
    text: 'Git',
  },
  {
    icon: faGithub,
    text: 'GitHub',
  },
  {
    icon: faLinux,
    text: 'Linux',
  },
  {
    icon: faAngular,
    text: 'Angular',
  },
  {
    icon: faReact,
    text: 'React',
  },
  {
    element: NextJS,
    text: 'NextJS',
  },
  {
    icon: faDatabase,
    text: 'SQL',
  },
  {
    icon: faNode,
    text: 'NodeJS',
  },
  {
    element: Express,
    text: 'Express',
  },
  {
    element: Sequelize,
    text: 'Sequelize',
  },
  {
    element: Postman,
    text: 'Postman',
  },
  {
    icon: faDocker,
    text: 'Docker',
  },
  {
    element: MySQL,
    text: 'MySQL',
  },
  {
    element: PostgreSQL,
    text: 'PostgreSQL',
  },
  {
    icon: faPython,
    text: 'Python',
  },
  {
    icon: faAws,
    text: 'AWS',
  },
  {
    icon: faGitlab,
    text: 'GitLab',
  },
  {
    icon: faBootstrap,
    text: 'Bootstrap',
  },
  {
    icon: faSass,
    text: 'Sass',
  },
  {
    icon: faLaravel,
    text: 'Laravel',
  },
  {
    icon: faPhp,
    text: 'PHP',
  },
]
