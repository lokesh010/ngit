import PrimaryBackgroundAtom from '../atoms/PrimaryBackgroundAtom'

function TextBlockMolecule() {
  return (
    <div className="space-y-4 flex flex-col flex-grow">
      <PrimaryBackgroundAtom className="w-full h-6" />
      <PrimaryBackgroundAtom className="w-full h-4" />
    </div>
  )
}

export default TextBlockMolecule
