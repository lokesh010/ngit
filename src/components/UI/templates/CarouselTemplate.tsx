import CarouselItemOrganism from '../organisms/CarouselItemOrganism'

interface IProps {
  items: null[];
  currentIndex: number;
}

function CarouselTemplate({ items, currentIndex }: IProps) {
  return (
    <>
      {items.map((_: null, i: number) => (
        <div className='w-1/3'>
          <CarouselItemOrganism key={i} isActive={i === currentIndex} />
        </div>
      ))}
    </>
  )
}

export default CarouselTemplate
