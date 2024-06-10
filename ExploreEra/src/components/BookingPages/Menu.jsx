import { useState } from 'react';
import Flights from './Flights/Flights';
import Hotels from './Hotels/Hotels';

export default function Menu() {
  const List = [
    { title: 'Flights', component: <Flights /> },
    { title: 'Stays', component: <Hotels /> },
  ];

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  return (
    <div>
      <div className="flex flex-row mt-32 max-w-[1200px] mx-auto">
        {List.map((item, index) => (
          <div
            key={index}
            onClick={() => handleTabClick(index)}
            className={`px-4 py-2 mr-4 cursor-pointer ${
              selectedTab === index ? 'text-orange-500' : 'text-gray-600 hover:text-orange-500'
            }`}
          >
            {item.title}
          </div>
        ))}
      </div>

      <div className="content mt-8">
        {List[selectedTab].component}
      </div>
    </div>
  );
}
