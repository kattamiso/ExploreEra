import { useState } from 'react';

const Menu = () => {
  const List = [
    { title: 'Flights', path: '/flights' },
    { title: 'Stays', path: '/stays' },
  ];

  return (
    <div className="flex flex-row mt-32 max-w-[1200px] mx-auto">
      {List.map((item, index) => (
        <div
          key={index}
          value={selectedTab}
          onChange={handleChange}
          className="px-4 py-2 mr-4 text-gray-600 hover:text-orange-500"
          activeClassName="text-orange-500"
        >
          {item.title}
        </div>
      ))}


      <div>

      </div>
    </div>
  );
};

export default Menu;
