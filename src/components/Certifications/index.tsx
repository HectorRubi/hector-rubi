import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { CONTAINER } from '../constants'
import { topics, Topic, Course } from './data'

export const Certifications = () => {
  return (
    <section className="bg-slate-300 py-36 dark:bg-slate-800">
      <div className={`${CONTAINER}`}>
        <div className="mb-5 flex flex-col md:mb-10 md:flex-row md:items-center">
          <h2 className="text-2xl md:w-1/3 md:text-4xl">Certifications</h2>
          <p className="text-xs text-zinc-300 md:w-2/3 md:text-sm">
            Certifications make my projects become valuable.
          </p>
        </div>

        {topics.map((topic: Topic, topicKey: number) => (
          <div
            key={topicKey}
            className="mb-2 flex flex-col items-center md:mb-5 md:flex-row"
          >
            <div className="mb-5 text-center md:w-1/3 md:pl-24">
              <span className={`mb-2 block text-5xl ${topic.color}`}>
                <FontAwesomeIcon icon={topic.icon} />
              </span>
              <span className="block text-accent-500">{topic.name}</span>
            </div>

            <div className="ml-6 md:ml-0 md:w-2/3">
              {topic.courses.map((course: Course, courseKey: number) => (
                <div key={courseKey} className="mb-4 flex items-center">
                  <img
                    width={40}
                    height={40}
                    className="mr-3 max-h-[40px]"
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
