'use client'
import Typewriter from 'typewriter-effect'
import { phrases } from '../../../data/phrases'

export const HeroPhrase = () => {
  return (
    <h2 className="mb-10 min-h-[165px] text-4xl !leading-snug xl:min-h-[245px] xl:text-6xl">
      <Typewriter
        options={{
          loop: true,
          delay: 60,
          deleteSpeed: 'natural',
        }}
        onInit={(typewriter) => {
          phrases.forEach((phrase) => {
            typewriter
              .typeString(
                `${phrase.text} <span class="italic text-2xl xl:text-3xl">- ${phrase.author}</span>`
              )
              .pauseFor(3000)
              .deleteAll()
              .start()
          })
        }}
      />
    </h2>
  )
}
