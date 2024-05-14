import { faDatabase, faCubes } from '@fortawesome/free-solid-svg-icons'
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
import {
  TypeScript,
  Postman,
  Sequelize,
  Express,
  MySQL,
  PostgreSQL,
  Tailwind,
  NextJS,
  Prisma,
  Vercel,
} from '@/icons'

import { Stack } from '@/types/stack'

export const stackHash: { [key: string]: Stack } = {
  html5: {
    icon: faHtml5,
    text: 'HTML5',
  },
  css3: {
    icon: faCss3,
    text: 'CSS3',
  },
  tailwind: {
    element: Tailwind,
    text: 'Tailwind',
  },
  javascript: {
    icon: faJs,
    text: 'JavaScript',
  },
  npm: {
    icon: faNpm,
    text: 'npm',
  },
  git: {
    icon: faGitAlt,
    text: 'Git',
  },
  github: {
    icon: faGithub,
    text: 'GitHub',
  },
  typescript: {
    element: TypeScript,
    text: 'TypeScript',
  },
  linux: {
    icon: faLinux,
    text: 'Linux',
  },
  angular: {
    icon: faAngular,
    text: 'Angular',
  },
  react: {
    icon: faReact,
    text: 'React',
  },
  nextjs: {
    element: NextJS,
    text: 'NextJS',
  },
  oop: {
    text: 'OOP',
    icon: faCubes,
  },
  sql: {
    icon: faDatabase,
    text: 'SQL',
  },
  nodejs: {
    icon: faNode,
    text: 'NodeJS',
  },
  express: {
    element: Express,
    text: 'Express',
  },
  sequelize: {
    element: Sequelize,
    text: 'Sequelize',
  },
  prisma: {
    element: Prisma,
    text: 'Prisma',
  },
  postman: {
    element: Postman,
    text: 'Postman',
  },
  docker: {
    icon: faDocker,
    text: 'Docker',
  },
  mysql: {
    element: MySQL,
    text: 'MySQL',
  },
  postgresql: {
    element: PostgreSQL,
    text: 'PostgreSQL',
  },
  python: {
    icon: faPython,
    text: 'Python',
  },
  vercel: {
    element: Vercel,
    text: 'Vercel',
  },
  aws: {
    icon: faAws,
    text: 'AWS',
  },
  gitlab: {
    icon: faGitlab,
    text: 'GitLab',
  },
  bootstrap: {
    icon: faBootstrap,
    text: 'Bootstrap',
  },
  laravel: {
    icon: faLaravel,
    text: 'Laravel',
  },
  php: {
    icon: faPhp,
    text: 'PHP',
  },
}
