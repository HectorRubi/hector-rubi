import { Project } from '@/types/project'
import { faCubes } from '@fortawesome/free-solid-svg-icons'
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
} from '@/icons'

export const projects: Project[] = [
  {
    name: 'Tic Tac Toe Game',
    stack: [
      { text: 'HTML', icon: faHtml5 },
      { text: 'CSS', icon: faCss3 },
      { text: 'JavaScript', icon: faJs },
      { text: 'OOP', icon: faCubes },
    ],
    image:
      'https://github.com/HectorRubi/hector-rubi/assets/68661875/43e7784c-d938-4e6e-914a-23d6df9e3b8a',
    link: 'https://hectorrubi.github.io/tic-tac-toe-javascript/',
    description: '',
  },
  {
    name: 'Skolar',
    stack: [
      { text: 'HTML', icon: faHtml5 },
      { text: 'CSS', icon: faCss3 },
      { text: 'Bootstrap', icon: faBootstrap },
      { text: 'JavaScript', icon: faJs },
      { text: 'PHP', icon: faPhp },
      { text: 'MySQL', element: MySQL },
    ],
    image:
      'https://github.com/HectorRubi/hector-rubi/assets/68661875/f4084633-0acf-43b1-b498-4062c10e29d3',
    link: 'https://skolar.mx',
    description: '',
  },
  {
    name: 'Cremapet',
    stack: [
      { text: 'HTML', icon: faHtml5 },
      { text: 'CSS', icon: faCss3 },
      { text: 'Bootstrap', icon: faBootstrap },
    ],
    image:
      'https://github.com/HectorRubi/hector-rubi/assets/68661875/dff5f929-f944-4db9-aa07-d9bb20b45ed5',
    link: 'https://www.cremapet.com/',
    description: '',
  },
]
