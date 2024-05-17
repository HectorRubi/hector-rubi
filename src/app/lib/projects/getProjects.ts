import prisma from '@/app/lib/primsa'
import { unstable_noStore as noStore } from 'next/cache'

export const getProjects = async () => {
  noStore()
  return await prisma.projects.findMany()
}
