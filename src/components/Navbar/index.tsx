'use client'
import Link from 'next/link'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'

import { Tooltip } from '@/components/Tooltip'
import { CONTAINER } from '@/components/constants'
import { contactLinks } from '@/data/contact-links'
import { useViewportDimensions } from '@/hooks/useViewportDimensions'
import { useScroll } from './useScroll'

export const Navbar = () => {
  const { viewport } = useViewportDimensions()
  const { scrollY, navHeight, navRef } = useScroll()
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header
      className={`
        md:top-0 md:z-10
        ${
          scrollY > navHeight.current
            ? 'md:sticky ' +
              (scrollY >= viewport.height / 2 ? 'md:transition-all' : '')
            : 'md:relative'
        }
        ${
          scrollY > viewport.height
            ? 'md:translate-y-0'
            : scrollY > navHeight.current && 'md:-translate-y-full'
        }
      `}
    >
      <nav
        className={`bg-primary-300 dark:bg-primary-800 ${
          scrollY >= viewport.height && 'shadow-2xl'
        }`}
        ref={navRef}
      >
        <div
          className={`${CONTAINER} relative z-10 flex flex-row items-center justify-between gap-4 py-10`}
        >
          <p className="text-2xl">
            <Link href="/">
              <span>Hector </span>
              <span className="text-secondary-600 dark:text-secondary-400">
                Rubí
              </span>
            </Link>
          </p>

          <button
            onClick={() => {
              setShowMenu(!showMenu)
            }}
            className="sm:hidden"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          <ul
            className={`absolute left-0 right-0 top-full transition-opacity sm:relative sm:left-auto sm:right-auto sm:top-auto sm:transition-none ${
              showMenu ? 'opacity-100' : 'opacity-0 sm:opacity-100'
            } flex flex-col items-center gap-5 bg-primary-300 py-3 dark:bg-primary-800 sm:flex-row sm:bg-transparent sm:py-0 dark:sm:bg-transparent`}
          >
            {contactLinks.map((link, linkKey) => (
              <li key={linkKey}>
                <a
                  href={link.url}
                  target="_blank"
                  className="group flex items-center"
                >
                  <FontAwesomeIcon
                    icon={link.icon}
                    className={`mr-2 text-lg transition-all group-hover:text-accent-600 dark:group-hover:text-accent-400`}
                  />
                  <span
                    className={`text-sm text-secondary-600 transition-all group-hover:text-accent-600 dark:text-secondary-400 dark:group-hover:text-accent-400`}
                  >
                    {link.name}
                  </span>
                </a>
              </li>
            ))}

            <li className="flex items-center gap-3 sm:hidden">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>hector.rubi.garcia@outlook.com</span>
            </li>

            <li className="group relative hidden cursor-pointer items-center justify-center gap-2 rounded-full bg-primary-300 transition-all hover:bg-primary-800 hover:text-accent-600 dark:bg-primary-800 dark:hover:bg-primary-600 dark:group-hover:text-accent-400 sm:flex sm:px-3 sm:py-3">
              <FontAwesomeIcon icon={faEnvelope} />
              <Tooltip
                text="hector.rubi.garcia@outlook.com"
                position="right"
                className="flex"
              />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
