import { projects } from '@/data/projects'
import { CONTAINER } from '@/components/constants'
import { Item } from './item'

export const ProjectsList = () => {
  return (
    <section className="bg-primary-400 dark:bg-primary-900">
      <div
        className={`${CONTAINER} gap-10 py-20 md:grid md:grid-cols-2 md:py-36 lg:grid-cols-3 2xl:grid-cols-4`}
      >
        {projects.map((project, projectIndex) => (
          <Item
            key={projectIndex}
            project={project}
            inverse={(projectIndex + 1) % 2 === 0}
          />
        ))}
      </div>
    </section>
  )
}
