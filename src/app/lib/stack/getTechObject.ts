import { stackHash } from '@/app/lib/stack/stackHash'
import { Stack } from '@/types/stack'

export const getTechObject = (tech: string): Stack | undefined =>
  stackHash[tech.toLowerCase()]
