import { useState } from 'react';
import CarouselTemplate from './components/UI/templates/CarouselTemplate';
import useData from './hooks/useData';
import useScroll from './hooks/useScroll';


function App() {
  const { handleScroll, containerRef, currentIndex, setCurrentIndex } = useScroll();
  const { data, sortBy } = useData();
  const [sort, setSort] = useState('alphabetical');

  const listData = sort === "alphabetical" ? data : sortBy(sort);
  const handleSortChange = (e: any) => {
    setSort(e.target.value);

    setTimeout(() => {
      setCurrentIndex(0);
    }, 100)
  };

  return (
    <>
      <select className='absolute bg-red-300 z-30' value={sort} onChange={handleSortChange}>
        <option value="alphabetical">Alphabetical</option>
        <option value="price">Display Price</option>
        <option value="quantity">Quantity</option>
        <option value="adjusted">Adjusted Price</option>
      </select>
      <div
        ref={containerRef}
        className="p-2 carousel-container"
        onScroll={handleScroll}
      >
        <CarouselTemplate items={listData} currentIndex={currentIndex} />
      </div>
    </>
  )
}

export default App
