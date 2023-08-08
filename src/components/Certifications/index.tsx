import { CONTAINER } from '../constants'
import { topics, Topic, Course } from './data'

export const Certifications = () => {
  return (
    <section className="bg-slate-300 dark:bg-slate-800 py-36">
      <div className={`${CONTAINER}`}>
        <div className="flex flex-col md:flex-row md:items-center mb-5 md:mb-10">
          <h2 className="text-2xl md:text-4xl md:w-1/3">Certifications</h2>
          <p className="text-xs md:text-sm text-zinc-300 md:w-2/3">
            Certifications make my projects become valuable.
          </p>
        </div>

        {topics.map((topic: Topic, topicKey: number) => (
          <div
            key={topicKey}
            className="flex flex-col md:flex-row mb-2 md:mb-5"
          >
            <div className="md:w-1/3 text-sm md:pl-24 mb-5 text-base">
              <i className={`${topic.icon} mr-2 text-yellow-500 text-xl`}></i>
              <span className="text-blue-500">{topic.name}</span>
            </div>

            <div className="ml-6 md:ml-0 md:w-2/3">
              {topic.courses.map((course: Course, courseKey: number) => (
                <div key={courseKey} className="mb-4 flex items-center">
                  <img
                    width={40}
                    height={40}
                    className="max-h-[40px] mr-3"
                    src={course.badge}
                    alt="platzi"
                  />
                  <div>
                    <p className="text-xs">{course.platform}</p>
                    <h3 className="text-base sm:text-xl md:text-2xl">
                      {course.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
