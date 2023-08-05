import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Description } from '@/components/Description'
import { LatestWorks } from '@/components/LatestWorks'
import { Certifications } from '@/components/Certifications'
import { Information } from '@/components/Information'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Hero></Hero>
        <Description></Description>
        <LatestWorks></LatestWorks>
        <Certifications></Certifications>
        <Information></Information>
        <Footer></Footer>
      </main>
    </>
  )
}
