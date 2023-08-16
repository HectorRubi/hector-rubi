'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'

import { Tooltip } from './../Tooltip'

import { CONTAINER } from '../constants'
import { contactLinks } from '../../data/contact-links'

import { useViewportDimensions } from './../../hooks/useViewportDimensions'
import { useScroll } from './useScroll'
import { useState } from 'react'

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
        className={`bg-primary-400 dark:bg-primary-900 ${
          scrollY >= viewport.height && 'shadow-2xl'
        }`}
        ref={navRef}
      >
        <div
          className={`${CONTAINER} relative z-10 flex flex-row items-center justify-between gap-4 py-10`}
        >
          <h3 className="text-2xl">
            <span>Hector </span>
            <span className="text-secondary-600 dark:text-secondary-400">
              Rubí
            </span>
          </h3>

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
            } flex flex-col items-center gap-5 bg-primary-400 py-3 dark:bg-primary-900 sm:flex-row sm:bg-transparent sm:py-0 dark:sm:bg-transparent`}
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
                    className={`mr-2 text-lg transition-all group-hover:text-accent-300 dark:group-hover:text-accent-400`}
                  />
                  <span
                    className={`text-sm text-secondary-600 transition-all group-hover:text-accent-300 dark:text-secondary-400 dark:group-hover:text-accent-400`}
                  >
                    {link.name}
                  </span>
                </a>
              </li>
            ))}

            <li className="group relative flex cursor-pointer items-center justify-center gap-2 rounded-full bg-primary-400 transition-all hover:bg-primary-800 hover:text-accent-300 dark:bg-primary-900 dark:hover:bg-primary-600 dark:group-hover:text-accent-400 sm:px-3 sm:py-3">
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="sm:hidden">hector.rubi.garcia@outlook.com</span>
              <Tooltip
                text="hector.rubi.garcia@outlook.com"
                position="right"
                className="hidden sm:flex"
              />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
