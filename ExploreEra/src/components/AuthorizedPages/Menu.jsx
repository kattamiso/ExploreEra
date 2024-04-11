import { Link } from 'react-router-dom';

const Menu = () => {
  const List = [
    { title: 'Flights', path: '/flights' },
    { title: 'Stays', path: '/stays' },
    { title: 'Car rentals', path: '/car-rentals' },
    { title: 'Cruises', path: '/cruises' },
    { title: 'Attractions', path: '/attractions' },
  ];

  return (
    <div className="flex flex-row">
      {List.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className="px-4 py-2 mr-4 text-gray-600 hover:text-orange-500"
          activeClassName="text-orange-500"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
