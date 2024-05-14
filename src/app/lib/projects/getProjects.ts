import prisma from '@/app/lib/primsa'

export const getProjects = async () => await prisma.projects.findMany()
