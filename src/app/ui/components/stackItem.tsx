import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Stack } from '@/types/stack'

export const StackItem = ({ stack }: { stack: Stack }) => {
  return (
    <span className="mr-2 inline-flex cursor-pointer flex-col items-center justify-center text-secondary-600 hover:text-black dark:text-secondary-400 dark:hover:text-white">
      <span>
        {stack.icon && (
          <FontAwesomeIcon icon={stack.icon} className="text-2xl lg:text-3xl" />
        )}
        {stack.element && <stack.element className="w-7 lg:w-8" />}
      </span>
      <span className="text-[0.6rem]">{stack.text}</span>
    </span>
  )
}
