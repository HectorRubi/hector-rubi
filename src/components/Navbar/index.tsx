import { CONTAINER } from '../constants'

export const Navbar = () => {
  return (
    <nav className="bg-slate-400 dark:bg-slate-900">
      <div className={`${CONTAINER} flex justify-between py-16`}>
        <h3 className="text-black dark:text-white">
          <span>Hector </span>
          <span>Rubí</span>
        </h3>

        <ul className="flex gap-3 text-black dark:text-white">
          <li>GitHub</li>
          <li>LinkedIn</li>
        </ul>
      </div>
    </nav>
  )
}
