import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import SwiperData from './SwiperData'; 

const YourComponent = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setStartIndex(prevIndex => (prevIndex === 0 ? SwiperData.length - 4 : prevIndex - 1));
        setIsTransitioning(false);
      }, 300 );
    }
  };

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setStartIndex(prevIndex => (prevIndex === SwiperData.length - 4 ? 0 : prevIndex + 1));
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <div className="relative mx-auto my-20 sm:w-screen md:w-[800px] lg:w-[1200px] ">
      <h2 className="mb-16 text-4xl font-medium">Popular Tour Offers</h2>
      <div className="flex transform transition-transform duration-300" >
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
          className="next-button absolute right-4 -my-10 z-20 px-4 rounded-md border-black transform 0.3s ease-in-out"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="flex justify-center items-center gap-4 cursor-pointer overflow-x-auto" >
        {SwiperData.slice(startIndex, startIndex + 4).map((item, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 lg:w-1/4   transition-transform duration-500 hover:scale-105"
            style={{ transition: 'transform 0.3s ease-in-out', transform: `translateX(-${startIndex * 4}%)` }}
         >
            <img
              src={item.Image}
              alt={item.title}
              className="w-full h-[400px] object-cover rounded-2xl"
              
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

export default YourComponent;
