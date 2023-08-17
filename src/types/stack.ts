import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

export type Stack = {
  icon?: IconDefinition
  text: string
  element?: (({ className }: { className: string }) => JSX.Element) | undefined
}
