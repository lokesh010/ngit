import FlexContainer from '../atoms/FlexContainer'
import CircleAtom from '../atoms/CircleAtom'
import TextBlockMolecule from './TextBlockMolecule'

function AvatarWithTextMolecule() {
  return (
    <FlexContainer>
      <CircleAtom className="size-20" />
      <TextBlockMolecule />
    </FlexContainer>
  )
}

export default AvatarWithTextMolecule
