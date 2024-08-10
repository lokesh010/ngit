import FlexContainer from '../atoms/FlexContainer'
import CircleAtom from '../atoms/CircleAtom'
import TextBlockMolecule from './TextBlockMolecule'
import { ItemType } from '../../../types'

interface IProps {
  item: ItemType
}

function AvatarWithTextMolecule({ item }: IProps) {
  return (
    <FlexContainer>
      <CircleAtom item={item} className="size-20" />
      <TextBlockMolecule item={item} />
    </FlexContainer>
  )
}

export default AvatarWithTextMolecule
