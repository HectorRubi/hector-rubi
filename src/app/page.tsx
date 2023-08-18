import { Navbar } from '@/components/Shared/Navbar'
import { Hero } from '@/components/Home/Hero'
import { Description } from '@/components/Home/Description'
import { LatestWorks } from '@/components/Home/LatestWorks'
import { Certifications } from '@/components/Home/Certifications'
import { Information } from '@/components/Home/Information'
import { Footer } from '@/components/Shared/Footer'
import { TechStack } from '@/components/Home/TechStack'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Description />
        <TechStack />
        <LatestWorks />
        <Certifications />
        <Information />
        <Footer />
      </main>
    </>
  )
}
