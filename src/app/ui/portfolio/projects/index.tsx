import { getProjects } from '@/app/lib/projects/getProjects'
import { CONTAINER } from '@/app/ui/constants'
import { Item } from './item'

export const Projects = async () => {
  const projects = await getProjects()

  return (
    <section className="bg-primary-400 pb-20 dark:bg-primary-900">
      <div
        className={`${CONTAINER} grid grid-cols-1 gap-10 max-sm:max-w-xs sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`}
      >
        {projects.map((project, projectIndex) => (
          <Item key={projectIndex} project={project} />
        ))}
      </div>
    </section>
  )
}
