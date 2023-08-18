import { CONTAINER } from '@/components/constants'

export const Hero = () => {
  // dark:shadow-[inset_0_0_0_1000px_rgba(0,0,0,.5)]
  return (
    <section className="bg-primary-400 bg-[url('/hero-bg.svg')] bg-cover bg-center bg-no-repeat py-20 dark:bg-primary-900 md:py-40">
      <div className={`${CONTAINER} text-center`}>
        <h1 className="mb-4 text-2xl md:text-4xl">Projects</h1>
        <h2 className="text-sm text-secondary-600 dark:text-secondary-400">
          Exploring a compilation of my diverse projects
        </h2>
      </div>
    </section>
  )
}
