import { CONTAINER } from '@/app/ui/constants'

export const ProjectsSkeleton = () => {
  return (
    <section className="bg-primary-400 py-20 dark:bg-primary-900">
      <div className={`${CONTAINER} text-center`}>
        <p>Loading...</p>
      </div>
    </section>
  )
}
