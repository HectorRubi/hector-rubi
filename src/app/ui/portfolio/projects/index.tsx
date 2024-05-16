import { getProjects } from '@/app/lib/projects/getProjects'
import { CONTAINER } from '@/app/ui/constants'
import { Item } from './item'

export const Projects = async () => {
  const projects = await getProjects()

  return (
    <section className="bg-primary-400 pb-20 dark:bg-primary-900">
      <div
        className={`${CONTAINER} gap-10 md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4`}
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
