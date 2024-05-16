export const Tooltip = ({
  text,
  position,
  className,
}: {
  text: string
  position: 'center' | 'left' | 'right'
  className?: string
}) => {
  const positionClasses = () => {
    if (position === 'center') {
      return 'items-center'
    }

    if (position === 'left') {
      return 'left-1/4 items-start'
    }

    if (position === 'right') {
      return 'right-1/4 items-end'
    }

    return ''
  }

  return (
    <span
      className={`invisible absolute top-full flex w-fit flex-col justify-center group-hover:visible ${positionClasses()} ${className}`}
    >
      <span className="mx-2 block w-2 border-b-8 border-l-4 border-r-4 border-b-black border-l-transparent border-r-transparent"></span>
      <span className="block rounded bg-black px-3 py-2 text-xs text-white">
        {text}
      </span>
    </span>
  )
}
