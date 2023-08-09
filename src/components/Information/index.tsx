import { CONTAINER } from '../constants'

export const Information = () => {
  return (
    <section>
      <div
        className={`${CONTAINER} flex flex-col md:flex-row md:justify-between px-5 py-36`}
      >
        <div className="mb-10 md:mb-0">
          <p className="text-2xl lg:text-4xl mb-4">
            Let&apos;s make something amazing <br className="hidden md:block" />
            together.
          </p>
          <p className="text-2xl lg:text-4xl mb-4">
            Start by <span className="text-blue-500">saying hi</span>
          </p>
        </div>
        <div>
          <h3 className="text-zinc-400 text-xl mb-4">Information</h3>
          <p className="text-base md:text-xl lg:text-2xl">
            hector.rubi.garcia@outlook.com
          </p>
        </div>
      </div>
    </section>
  )
}
