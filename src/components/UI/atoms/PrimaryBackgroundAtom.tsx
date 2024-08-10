import clsx from 'clsx'

interface IProps {
  className: string;
  content: string | JSX.Element;
}

function PrimaryBackgroundAtom({ className, content }: IProps) {
  return (
    <div className={clsx('p-5 inset-border !bg-primaryBackground rounded-3xl text-white font-bold', className)}>{content}</div>
  )
}

export default PrimaryBackgroundAtom
