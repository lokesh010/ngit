import PrimaryBackgroundAtom from './PrimaryBackgroundAtom'
import clsx from 'clsx'

function CircleAtom({ className }: { className: string }) {
  return (
    <PrimaryBackgroundAtom className={clsx('rounded-full', className)} />
  )
}

export default CircleAtom
