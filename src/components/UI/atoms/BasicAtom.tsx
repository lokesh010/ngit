import clsx from "clsx";

interface IProps {
  className: string;
  children: JSX.Element | JSX.Element[]
}
function BasicAtom({ className, children }: IProps) {
  return (
    <div className={clsx('carousel-item p-5 space-y-4 inset-border rounded-3xl', className)}>
      {children}
    </div>
  );
};

export default BasicAtom
