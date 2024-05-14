import { stack } from '@/data/stack'
import { Stack } from '@/types/stack'

export const getTechFromStack = (stackElement: string): Stack | undefined =>
  stack.find((value) => value.text.toLowerCase() === stackElement.toLowerCase())
