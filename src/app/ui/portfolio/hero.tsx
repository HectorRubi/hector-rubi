import Image from 'next/image'
import { CONTAINER } from '@/app/ui/constants'

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-primary-300 py-20 dark:bg-primary-800 md:py-40">
      <div className="absolute bottom-0 left-0 right-0 top-0 flex animate-rotation items-center justify-center">
        <Image
          src="/hero-bg.svg"
          width={800}
          height={800}
          alt="hero-bg"
          className="w-full"
        ></Image>
      </div>
      <div className={`${CONTAINER} text-center`}>
        <h1 className="mb-4 text-2xl md:text-4xl">Portfolio</h1>
        <h2 className="text-sm text-secondary-600 dark:text-secondary-400">
          Exploring a compilation of my diverse projects
        </h2>
      </div>
    </section>
  )
}
