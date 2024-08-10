import { useEffect, useRef, useState } from "react";

function useScroll() {
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
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return {
    currentIndex,
    setCurrentIndex,
    containerRef,
    handleScroll,
  };
}

export default useScroll;
