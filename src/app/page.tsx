import { Hero } from '@/components/Home/Hero'
import { Description } from '@/components/Home/Description'
import { LatestWorks } from '@/components/Home/LatestWorks'
import { Certifications } from '@/components/Home/Certifications'
import { Information } from '@/components/Shared/Information'
import { TechStack } from '@/components/Home/TechStack'

export default function Home() {
  return (
    <>
      <Hero />
      <Description />
      <TechStack />
      <LatestWorks />
      <Certifications />
      <Information />
    </>
  )
}
