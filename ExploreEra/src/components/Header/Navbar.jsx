import { useEffect, useState } from "react";
import { SidebarData } from "./SidebarData";
import User from "../../../public/Icons/User/User.png";
import User2 from "../../../public/Icons/User/User2.png";
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown"
import MenuIcon from "../../../public/Icons/MenuIcon/MenuIcon.png"
import ScrollMenuIcon from "../../../public/Icons/MenuIcon/ScrollMenuIcon.png"
import Close from "../../../public/Icons/MenuIcon/Close.png"


const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (link) => {
    navigate(link);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 70);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className={`flex fixed w-screen top-0 z-20 justify-between px-12 md:px-20 pt-5 ${sticky ? 'white-nav' : ''}`}>
        {/* logo */}
        <h1 onClick={() => handleNavigation('/')} className={`md:text-5xl text-3xl  cursor-pointer font-kalnia  ${sticky ? 'text-[#424244]' : 'text-white'} `}>
          ExploreEra
        </h1>

        {/* desktop navigation */}
        <ul className="hidden lg:flex items-center gap-7 relative">
          {SidebarData.map((val, key) => (
            <li key={key} className={`cursor-pointer text-3xl ${sticky ? 'text-[#424244]' : 'text-white'} hover:text-[#C85100]`} onClick={() => handleNavigation(val.link)}>
              <NavLink to={val.link}>
                {val.title}
              </NavLink>
            </li>
          ))}

          {/* user */}
          <li className="relative">
            <img src={sticky ? User : User2} alt="userImage" className="w-8 h-8 cursor-pointer" onClick={toggle} />
            {isOpen && <Dropdown />}
          </li>
        </ul>

        {/* mobile navigation icon */}
        <button onClick={toggle} className="lg:hidden z-50">
          {isOpen ? (
            <img src={Close} alt="Close" className="h-10" />
          ) : (
            <img src={sticky ? ScrollMenuIcon : MenuIcon} className="h-10" />
          )}
        </button>

        {/* mobile navigation menu */}
        {isOpen && (
          <div className="lg:hidden fixed flex flex-col items-center right-0 top-0 h-screen w-[50%] bg-[#ffedd5] py-28 z-40 transition ease-in-out translateY(25%)">
            {SidebarData.map((val, key) => (
              <NavLink key={key} to={val.link} className="block text-center text-2xl py-4 hover:text-[#C85100]" onClick={toggle}>
                {val.title}
              </NavLink>
            ))}
            <div>
              <img src={User} alt="userImage" className="w-8 h-8 cursor-pointer" onClick={Dropdown} />
              
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
