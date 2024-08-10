import { ItemType } from '../../../types';
import CarouselItemOrganism from '../organisms/CarouselItemOrganism'

interface IProps {
  items: ItemType[];
  currentIndex: number;
}

function CarouselTemplate({ items, currentIndex }: IProps) {
  return (
    <>
      {items.map((item: ItemType, i: number) => (
        <div key={item.id} className='w-full md:w-1/3'>
          <CarouselItemOrganism item={item} isActive={i === currentIndex} />
        </div>
      ))}
    </>
  )
}

export default CarouselTemplate
