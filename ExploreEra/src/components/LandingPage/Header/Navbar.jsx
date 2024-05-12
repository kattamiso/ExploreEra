import { useEffect, useState } from "react";
import { SidebarData } from "./SidebarData";
import User from "../../../../public/Icons/User/User.png";
import User2 from "../../../../public/Icons/User/User2.png";
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown"
import MenuIcon from "../../../../public/Icons/MenuIcon/MenuIcon.png"
// import {ScrollMenuIcon} from "../../../../public/Icons/MenuIcon/ScrollMenuIcon.png"
import Close from "../../../../public/Icons/MenuIcon/Close.png"


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
    window.addEventListener('scroll', () => {
      window.scrollY > 70 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <div>
      <nav
        className={`flex fixed w-screen top-0 z-20 justify-between items-center px-20 py-2 pt-5 ${
          sticky ? 'white-nav' : ''
        }`}
      >
        <h1  onClick={() => handleNavigation('/')} className={`text-5xl cursor-pointer font-kalnia ${sticky ? 'text-[#424244]' : 'text-white'}`}>
          ExploreEra
        </h1>


        <ul className=" hidden md:flex items-center gap-7 relative">
          {SidebarData.map((val, key) => (
            <li
              key={key}
              className={`cursor-pointer text-3xl ${
                sticky ? 'text-[#424244]' : 'text-white'
              } hover:text-[#C85100]`}
              onClick={() => handleNavigation(val.link)}
            >
              <NavLink
                to={val.link}
                >
              {val.title}
              </NavLink>
            </li>
          ))}

          {/* user */}
          <div className="relative">
            <img
              src={sticky ? User : User2}
              alt="userImage"
              className="w-8 h-8 cursor-pointer"
              onClick={toggle}
            />
            {isOpen && (
             <Dropdown />
            )}
          </div>
        </ul>


          <button onClick={toggle} className="md:hidden p-2 focus:outline-none">
            {isOpen ? <img src={Close} alt="Close" className="h-14 ml- " /> : <img src={MenuIcon} alt="MenuIcon" className="h-6 w-6" />}
          </button>

          {isOpen && (
          <div className="md:hidden absolute w-full h- top-20 right-0 bg-white py-4 px-8 z-50">
            {SidebarData.map((val, key) => (
              <NavLink
                key={key}
                to={val.link}
                className="block text-2xl py-2 hover:text-[#C85100]"
                onClick={toggle}
              >
                {val.title}
              </NavLink>
            )
            
            )}
          </div>
        )}
      
      </nav>
    </div>
  );
};

export default Navbar;