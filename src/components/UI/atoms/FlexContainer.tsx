import clsx from 'clsx'

interface IProps {
  className?: string;
  children: JSX.Element | JSX.Element[]
}
function FlexContainer({ className, children }: IProps) {
  return (
    <div className={clsx('flex gap-5 items-center', className)}>
      {children}
    </div>
  )
}

export default FlexContainer
