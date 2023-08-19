import { Navbar } from '@/components/Shared/Navbar'
import { Footer } from '@/components/Shared/Footer'
import { Information } from '@/components/Shared/Information'
import { Hero } from '@/components/Projects/Hero'
import { ProjectsList } from '@/components/Projects/ProjectsList'

export default function Projects() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectsList />
        <Information />
        <Footer />
      </main>
    </>
  )
}
