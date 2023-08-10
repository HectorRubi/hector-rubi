'use client'
import Image from 'next/image'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faReact,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons'
import { useDimensions } from './useDimensions'

export const HeroImage = () => {
  const circle = useRef<HTMLDivElement>(null)
  const { dimensions } = useDimensions(circle)

  return (
    <>
      {/* Back circle */}
      <div
        className="top-0 mx-auto w-full rounded-full bg-gradient-to-tl from-primary-300 to-primary-400 shadow dark:from-primary-800 dark:to-primary-900"
        style={{ height: dimensions.width + 'px' }}
        ref={circle}
      ></div>

      {/* Profile */}
      <div className="absolute bottom-0 mb-5 w-full">
        <Image
          src={'/hoodie.svg'}
          alt={'profile'}
          className="mx-auto w-3/5"
          width={500}
          height={500}
        />
      </div>

      {/* Badges */}
      <div className="absolute bottom-0 left-0 right-0 top-0 text-7xl">
        <div className="absolute right-0 top-2/3 flex items-center justify-center rounded-full bg-primary-400 p-10 text-lime-500 shadow-2xl dark:bg-primary-900 lg:p-14">
          <FontAwesomeIcon
            icon={faNodeJs}
            className="h-20 w-20 lg:h-28 lg:w-28"
          />
        </div>

        <div className="absolute left-0 top-2/3 flex items-center justify-center rounded-full bg-primary-400 p-6 text-red-500 shadow-2xl dark:bg-primary-900 lg:p-10">
          <FontAwesomeIcon
            icon={faAngular}
            className="h-16 w-16 lg:h-20 lg:w-20"
          />
        </div>

        <div className="absolute right-0 top-1/4 flex items-center justify-center rounded-full bg-primary-400 p-4 text-blue-500 shadow-2xl dark:bg-primary-900 lg:p-6">
          <FontAwesomeIcon
            icon={faReact}
            className="h-14 w-14 lg:h-16 lg:w-16"
          />
        </div>
      </div>
    </>
  )
}
