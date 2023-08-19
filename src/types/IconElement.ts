export type IconElement =
  | (({ className }: { className: string }) => JSX.Element)
  | undefined
