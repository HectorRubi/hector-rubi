import { Stack } from './stack'

export type Project = {
  name: string
  stack: string[] | Stack[]
  image: string
  link: string
  description: string
}
