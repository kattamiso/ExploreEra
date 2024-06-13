import { useState } from 'react';
import Airlines from '../../../../public/Img/Airlines.png';

export function FlightsComponent() {
  const [filter, setFilter] = useState('all'); 
  const [flights, setFlights] = useState([
    { id: 1, stops: 'one' },
    { id: 2, stops: 'two' },
    { id: 3, stops: 'three' },
  ]);

  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };


  const addMoreFlights = () => {
    const newFlights = [
      { id: flights.length + 1, stops: 'one' },
      { id: flights.length + 2, stops: 'two' },
      { id: flights.length + 3, stops: 'three' },
    ];
    setFlights([...flights, ...newFlights]);
  };
  return (
    <div className="relative max-w-[850px] mr-[48px] flex gap-40 mt-[55px]">
      {/* Filter Buttons */}
      <div className="flex justify-around flex-col gap-8 mb-4">
        <button className="bg-orange-600 w-[100px] h-[35px] rounded-xl text-white" onClick={() => handleFilterChange('all')}>
          All
        </button>
        <button className="bg-orange-600 w-[100px] h-[35px] rounded-xl text-white" onClick={() => handleFilterChange('one')}>
          One Stop
        </button>
        <button className="bg-orange-600 w-[100px] h-[35px] rounded-xl text-white" onClick={() => handleFilterChange('two')}>
          Two Stops
        </button>
        <button className="bg-orange-600 w-[100px] h-[35px] rounded-xl text-white" onClick={() => handleFilterChange('three')}>
          Three Stops
        </button>
      </div>

      {/* One Stop Flight */}
      <div className='flex flex-col'>
      {(filter === 'all' || filter === 'one') && (
        <div className="w-[800px] h-[100px] bg-gray-200 rounded-xl flex items-center justify-between mb-4">
          <div className="flex flex-col items-center justify-between">
            <img src={Airlines} alt="Airlines Georgia" className="size-16" />
            <p>Georgian Airlines</p>
          </div>
          <div className="flex justify-between w-[300px] items-center">
            <div>
              <p>Take Off</p>
              <p>12:00</p>
            </div>
            <div className="flex items-center m-8">
              <div className="relative flex items-center">
                <div className="w-44 h-1 bg-orange-600"></div>
                <div className="absolute ml-[80px] bg-gray-300 border border-gray-400 w-6 h-6"></div>
              </div>
            </div>
            <div>
              <p>Landing</p>
              <p>19:00</p>
            </div>
          </div>
          <p className="text-gray-400">7 Hours</p>
          <div className="flex flex-col items-center justify-center">
            <h2 className="p-3">Price 600$</h2>
            <div className="bg-black h-[2px] w-[120px]"></div>
            <button className="bg-orange-600 w-[100px] h-[35px] rounded-xl text-white mt-2">View Deal</button>
          </div>
        </div>
      )}

      {/* Two Stops Flight */}
      {(filter === 'all' || filter === 'two') && (
        <div className="w-[800px] h-[100px] bg-gray-200 rounded-xl flex items-center justify-between mb-4">
          <div className="flex flex-col items-center justify-between">
            <img src={Airlines} alt="Airlines Georgia" className="size-16" />
            <p>Georgian Airlines</p>
          </div>
          <div className="flex justify-between w-[300px] items-center">
            <div>
              <p>Take Off</p>
              <p>12:00</p>
            </div>
            <div className="flex items-center m-8">
              <div className="relative flex items-center">
                <div className="w-44 h-1 bg-orange-600"></div>
                <div className="absolute ml-[40px] bg-gray-300 border border-gray-400 w-6 h-6"></div>
                <div className="absolute ml-[100px] bg-gray-300 border border-gray-400 w-6 h-6"></div>
              </div>
            </div>
            <div>
              <p>Landing</p>
              <p>19:00</p>
            </div>
          </div>
          <p className="text-gray-400">7 Hours</p>
          <div className="flex flex-col items-center justify-center">
            <h2 className="p-3">Price 600$</h2>
            <div className="bg-black h-[2px] w-[120px]"></div>
            <button className="bg-orange-600 w-[100px] h-[35px] rounded-xl text-white mt-2">View Deal</button>
          </div>
        </div>
      )}

      {/* Three Stops Flight */}
      {(filter === 'all' || filter === 'three') && (
        <div className="w-[800px] h-[100px] bg-gray-200 rounded-xl flex items-center justify-between mb-4">
          <div className="flex flex-col items-center justify-between">
            <img src={Airlines} alt="Airlines Georgia" className="size-16" />
            <p>Georgian Airlines</p>
          </div>
          <div className="flex justify-between w-[300px] items-center">
            <div>
              <p>Take Off</p>
              <p>12:00</p>
            </div>
            <div className="flex items-center m-8">
              <div className="relative flex items-center">
                <div className="w-44 h-1 bg-orange-600"></div>
                <div className="absolute ml-[20px] bg-gray-300 border border-gray-400 w-6 h-6"></div>
                <div className="absolute ml-[80px] bg-gray-300 border border-gray-400 w-6 h-6"></div>
                <div className="absolute ml-[140px] bg-gray-300 border border-gray-400 w-6 h-6"></div>
              </div>
            </div>
            <div>
              <p>Landing</p>
              <p>19:00</p>
            </div>
          </div>
          <p className="text-gray-400">7 Hours</p>
          <div className="flex flex-col items-center justify-center">
            <h2 className="p-3">Price 600$</h2>
            <div className="bg-black h-[2px] w-[120px]"></div>
            <button className="bg-orange-600 w-[100px] h-[35px] rounded-xl text-white mt-2">View Deal</button>
          </div>
        </div>
      )}
            <button className="bg-orange-600 w-[800px] h-[50px] rounded-xl text-white mt-2" onClick={addMoreFlights}>Add more</button>

      </div>
      
    </div>
  );
}
