import Image from 'next/image'
import { CONTAINER } from '@/app/ui/constants'

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-primary-400 py-20 dark:bg-primary-900">
      <div className={`${CONTAINER} text-center`}>
        <h1 className="mb-4 text-2xl md:text-4xl">Portfolio</h1>
        <h2 className="text-sm text-secondary-600 dark:text-secondary-400">
          Exploring a compilation of my diverse projects
        </h2>
      </div>
    </section>
  )
}
