import { IconDefinition } from '@fortawesome/free-brands-svg-icons'

export type TopicNames =
  | 'JavaScript'
  | 'Angular'
  | 'React'
  | 'Node'
  | 'Other'
  | 'Python'
  | 'TypeScript'

export type Course = {
  name: string
  platform: 'Platzi' | 'Udemy'
  badge: string
}

export type CertificationsGroup = {
  name: TopicNames
  icon: IconDefinition
  color: string
  courses: Course[]
}
