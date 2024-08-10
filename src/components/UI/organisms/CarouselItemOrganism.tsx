import clsx from "clsx"
import BasicAtom from "../atoms/BasicAtom"
import PrimaryBackgroundAtom from "../atoms/PrimaryBackgroundAtom"
import AvatarWithTextMolecule from "../molecules/AvatarWithTextMolecule"
import { ItemType } from "../../../types"

function CarouselItemOrganism({ isActive, item }: { isActive: boolean, item: ItemType }) {
  return (
    <BasicAtom className={clsx(isActive ? 'active' : '')}>
      <PrimaryBackgroundAtom content={
        <div>
          <p>{item.name}</p>
          <p>{item.category}</p>
        </div>
      } className="h-1/3 w-full" />
      <AvatarWithTextMolecule item={item} />
    </BasicAtom>
  )
}

export default CarouselItemOrganism
