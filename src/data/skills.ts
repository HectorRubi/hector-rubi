import {
  faDatabase,
  faCode,
  faTerminal,
  faTools,
} from '@fortawesome/free-solid-svg-icons'

import { Skill } from '@/types/skill'

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
    name: 'Solving Problems',
    description:
      'Every problem has a solution, we just need to find the best one.',
    stat: 0,
    icon: faTools,
  },
]
