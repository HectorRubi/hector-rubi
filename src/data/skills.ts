import {
  faDatabase,
  faCode,
  faTerminal,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'

export type Skills = {
  name: string
  description: string
  stat: number
  icon: IconDefinition
}

export const skills: Skills[] = [
  {
    name: 'Front-End',
    description: 'Create web pages with coding super smooth.',
    stat: 10,
    icon: faCode,
  },
  {
    name: 'Back-End',
    description: 'I develop back-end with smart thinking.',
    stat: 5,
    icon: faTerminal,
  },
  {
    name: 'Database',
    description: 'I know store data on easy way.',
    stat: 1,
    icon: faDatabase,
  },
]
