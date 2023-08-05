import Image from 'next/image'
import { CONTAINER } from '../constants'
import { Stats } from './Stats'

export const Hero = () => {
  return (
    <section className="bg-slate-300 dark:bg-slate-800">
      <div className={`${CONTAINER} flex flex-col md:flex-row`}>
        <div className="md:w-1/2">
          <div className="ml-40 my-36">
            <p className="text-black dark:text-white bg-blue-400 dark:bg-blue-800 inline-block px-3 py-1 rounded text-md mb-4">
              Full Stack Developer
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Talk is cheap.
              <br />
              Show me the code
            </h2>
            <p className="text-md text-zinc-500 dark:text-zinc-400">
              I code beautifully simple things, and I love what I do.
            </p>
          </div>

          <Stats />
        </div>
        <div className="md:w-1/2 h-96">
          <Image src="/next.svg" alt="hero-image" width={700} height={100} />
        </div>
      </div>
    </section>
  )
}
