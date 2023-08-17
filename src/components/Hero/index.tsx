import { CONTAINER } from '@/components/constants'
import { stats } from '@/data/stats'

import { Stat } from './Stat'
import { HeroImage } from './HeroImage'
import { HeroPhrase } from './HeroPhrase'

export const Hero = () => {
  return (
    <section className="bg-gradient-radial-left from-primary-200 to-primary-300  dark:from-primary-700 dark:to-primary-800">
      <div
        className={`${CONTAINER} flex flex-col items-center justify-center md:flex-row`}
      >
        <div className="w-full pt-20 md:w-1/2 md:pt-36">
          <div className="lg:ml-10">
            <p className="text-md mb-12 inline-block rounded bg-accent-500 px-3 py-1 text-white shadow">
              Full Stack Developer
            </p>

            <HeroPhrase />

            <p className="text-md mb-20 text-secondary-500 dark:text-secondary-400 lg:mb-36">
              I code beautifully simple things, <br />
              and I love what I do.
            </p>
          </div>

          <div className="mb-20 flex flex-wrap gap-10">
            {stats.map((stat, index) => (
              <Stat key={index} stat={stat} />
            ))}
          </div>
        </div>

        <div className="relative hidden md:block md:w-1/2 2xl:pt-36">
          <HeroImage
            bgCircle="fill-primary-400 dark:fill-primary-900"
            bgIcons="fill-primary-500 dark:fill-primary-950"
            bgAccent="fill-accent-500"
          />
        </div>
      </div>
    </section>
  )
}
