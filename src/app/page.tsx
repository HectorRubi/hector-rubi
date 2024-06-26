import { Hero } from '@/app/ui/home/hero'
import { Description } from '@/app/ui/home/description'
import { LatestWorks } from '@/app/ui/home/latestWorks'
import { TechStack } from '@/app/ui/home/techStack'

export default function Home() {
  return (
    <>
      <Hero />
      <Description />
      <TechStack />
      <LatestWorks />
    </>
  )
}
