import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Description } from '@/components/Description'
import { LatestWorks } from '@/components/LatestWorks'
import { Certifications } from '@/components/Certifications'
import { Information } from '@/components/Information'
import { Footer } from '@/components/Footer'
import { TechStack } from '@/components/TechStack'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Description />
        <LatestWorks />
        <TechStack />
        <Information />
        <Footer />
      </main>
    </>
  )
}
