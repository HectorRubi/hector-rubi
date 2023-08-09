import { Stats } from './Stats'
import { HeroImage } from './HeroImage'

import { CONTAINER } from '../constants'

export const Hero = () => {
  return (
    <section className="bg-primary-300 dark:bg-primary-800">
      <div
        className={`${CONTAINER} flex flex-col items-center justify-center md:flex-row`}
      >
        <div className="md:w-1/2">
          <div className="my-36 ml-40">
            <p className="text-md mb-12 inline-block rounded bg-accent-500 px-3 py-1 text-white shadow">
              Full Stack Developer
            </p>
            <h2 className="mb-10 text-4xl !leading-snug md:text-5xl lg:text-6xl">
              Talk is cheap.
              <br />
              Show me the code
            </h2>
            <p className="text-md text-zinc-500 dark:text-zinc-400">
              I code beautifully simple things, <br />
              and I love what I do.
            </p>
          </div>

          <Stats />
        </div>

        <HeroImage />
      </div>
    </section>
  )
}
