import { projects } from '@/data/projects'
import { CONTAINER } from '@/components/constants'

export const ProjectsList = () => {
  return (
    <section className="bg-primary-300 dark:bg-primary-800">
      <div className={`${CONTAINER} grid grid-cols-3 gap-10 py-20 md:py-36`}>
        {projects.map((project, projectIndex) => (
          <p key={projectIndex}>{project.name}</p>
        ))}
      </div>
    </section>
  )
}
