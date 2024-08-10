import clsx from "clsx"
import BasicAtom from "../atoms/BasicAtom"
import PrimaryBackgroundAtom from "../atoms/PrimaryBackgroundAtom"
import AvatarWithTextMolecule from "../molecules/AvatarWithTextMolecule"

function CarouselItemOrganism({ isActive }: { isActive: boolean }) {
  return (
    <BasicAtom className={clsx(isActive ? 'active' : '')}>
      <PrimaryBackgroundAtom className="h-1/3 w-full" />
      <AvatarWithTextMolecule />
    </BasicAtom>
  )
}

export default CarouselItemOrganism
