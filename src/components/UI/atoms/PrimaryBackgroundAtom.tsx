import clsx from 'clsx'

function PrimaryBackgroundAtom({ className }: { className: string }) {
  return (
    <div className={clsx('inset-border bg-primaryBackground rounded-3xl', className)} />
  )
}

export default PrimaryBackgroundAtom
