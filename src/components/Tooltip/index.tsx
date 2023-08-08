export const Tooltip = ({
  text,
  position,
}: {
  text: string
  position: 'center' | 'left' | 'right'
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
    <div
      className={`invisible absolute bottom-full flex w-fit flex-col justify-center group-hover:visible ${positionClasses()}`}
    >
      <span className="block rounded bg-black px-3 py-2 text-xs text-white">
        {text}
      </span>
      <div className="mx-2 w-2 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-black"></div>
    </div>
  )
}
