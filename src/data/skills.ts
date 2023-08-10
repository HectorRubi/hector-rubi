import {
  faDatabase,
  faCode,
  faTerminal,
} from '@fortawesome/free-solid-svg-icons'

import { Skill } from '../types/skill'

export const skills: Skill[] = [
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
