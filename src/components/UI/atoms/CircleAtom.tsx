import { ItemType } from '../../../types';
import PrimaryBackgroundAtom from './PrimaryBackgroundAtom'
import clsx from 'clsx'

function CircleAtom({ className, item }: { className: string; item: ItemType }) {
  return (
    <PrimaryBackgroundAtom content={
      <div>
        <label>{item.quantity}</label>
      </div>
    } className={clsx('rounded-full flex items-center justify-center', className)} />
  )
}

export default CircleAtom
