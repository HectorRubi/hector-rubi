import { Suspense } from 'react'
import { Hero } from '@/app/ui/portfolio/hero'
import { Projects } from '@/app/ui/portfolio/projects'
import { ProjectsSkeleton } from '@/app/ui/portfolio/projects/projectsSkeleton'

export default function Portfolio() {
  return (
    <>
      <Hero />
      <Suspense fallback={<ProjectsSkeleton />}>
        <Projects />
      </Suspense>
    </>
  )
}
