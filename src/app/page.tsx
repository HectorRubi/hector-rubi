import { Hero } from '@/app/ui/home/hero'
import { Description } from '@/components/Home/Description'
import { LatestWorks } from '@/components/Home/LatestWorks'
import { Certifications } from '@/components/Home/Certifications'
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
