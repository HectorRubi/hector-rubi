import prisma from '@/app/lib/primsa'

export const getLatestProjects = async () =>
  await prisma.projects.findMany({ take: 3 })
