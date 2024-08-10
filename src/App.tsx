import { useState, useRef, useEffect } from 'react';
import CarouselTemplate from './components/UI/templates/CarouselTemplate';

const items = Array(10).fill(null);

function App() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const containerRef = useRef<any>(null);

  const handleScroll = () => {
    const containerHeight = containerRef.current.clientHeight;
    const scrollTop = containerRef.current.scrollTop;
    let newIndex = Math.round(scrollTop / (containerHeight * 0.6));

    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: currentIndex * containerRef.current.clientHeight * 0.6,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  return (
    <>
      <div
        ref={containerRef}
        className="carousel-container"
        onScroll={handleScroll}
      >
        <CarouselTemplate items={items} currentIndex={currentIndex} />;
      </div>
    </>
  )
}

export default App
