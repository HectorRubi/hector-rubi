import { Hero } from '@/app/ui/home/hero'
import { Description } from '@/components/Home/Description'
import { LatestWorks } from '@/app/ui/home/latestWorks'
import { Certifications } from '@/app/ui/home/certifications'
import { TechStack } from '@/components/Home/TechStack'

export default function Home() {
  return (
    <>
      <Hero />
      <Description />
      <TechStack />
      <LatestWorks />
      <Certifications />
    </>
  )
}
