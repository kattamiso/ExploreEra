import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import SwiperData from "./SwiperData";

const Swiper = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setStartIndex((prevIndex) => {
          if (prevIndex === 0) {
            return SwiperData.length - 4;
          } else {
            return prevIndex - 1;
          }
        });
        setIsTransitioning(false);
      }, 200); 
    }
  };
  
  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setStartIndex((prevIndex) => {
          if (prevIndex === SwiperData.length - 4) {
            return 0;
          } else {
            return prevIndex + 1;
          }
        });
        setIsTransitioning(false);
      }, 200); 
    }
  };
  

  return (
    <div className="relative max-w-[1200px] mx-auto my-20">
      <div>
        <button
          onClick={handlePrev}
          disabled={isTransitioning}
          className="prev-button absolute -my-10 z-20 px-4 rounded-md border-black"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          onClick={handleNext}
          disabled={isTransitioning}
          className="next-button absolute right-4 -my-10 z-20 px-4 rounded-md border-black "
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="flex justify-center items-center h-64 gap-4 cursor-pointer">
        {SwiperData.slice(startIndex, startIndex + 4).map((item, index) => (
          <div
            key={index}
            className="w-1/4 h-full transition-transform duration-500 hover:scale-105"
          >
            <img
              src={item.Image}
              alt={item.title}
              className="flex w-[380px] h-[400px] object-cover"
            />
            <div className="absolute p-4">
              <h3 className="text-xl font-bold mt-4">{item.title}</h3>
              <p className="text-lg font-normal">{item.condition}</p>
              <p className="text-lg font-normal">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Swiper;