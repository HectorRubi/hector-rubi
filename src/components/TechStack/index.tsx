import { Carousel } from '@/components/Carousel'
import { stack } from '@/data/stack'
import { splitArrayToChunks } from '@/utils/splitArrayToChunks'

export const TechStack = () => {
  const sections = splitArrayToChunks(stack, 10)
  return (
    <section className="bg-primary-400 dark:bg-primary-900">
      {sections.map((section, sectionIndex) => (
        <div className="py-3" key={sectionIndex}>
          <Carousel stack={section} inverse={(sectionIndex + 1) % 2 === 0} />
        </div>
      ))}
    </section>
  )
}
