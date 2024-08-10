import { adjustedPrice } from '../../../helpers'
import { ItemType } from '../../../types'
import PrimaryBackgroundAtom from '../atoms/PrimaryBackgroundAtom'

function TextBlockMolecule({ item }: { item: ItemType }) {
  return (
    <div className="space-y-4 flex flex-col flex-grow">
      <PrimaryBackgroundAtom content={<p>Display Price: {item.price}</p>} className="w-full px-4 py-2" />
      <PrimaryBackgroundAtom content={<p>Adjusted Price: {adjustedPrice(item.price, item.quantity)}</p>} className='w-[fit-content] px-4 py-2' />
    </div>
  )
}

export default TextBlockMolecule
