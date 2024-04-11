import { useEffect, useState } from "react";
import { SidebarData } from "./SidebarData";
import User from "../../../../public/Icons/User/User.png";
import User2 from "../../../../public/Icons/User/User2.png";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const navigate = useNavigate();

  const toggle = () => {
    setIsDropDownOpen((prevState) => !prevState);
  };

  const handleNavigation = (link) => {
    navigate(link);
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
        <ul className="flex items-center gap-7 relative">
          {SidebarData.map((val, key) => (
            <li
              key={key}
              className={`cursor-pointer text-3xl ${
                sticky ? 'text-[#424244]' : 'text-white'
              } hover:text-[#C85100]`}
              onClick={() => handleNavigation(val.link)}
            >
              {val.title}
            </li>
          ))}
          <div className="relative">
            <img
              src={sticky ? User : User2}
              alt="userImage"
              className="w-8 h-8 cursor-pointer"
              onClick={toggle}
            />
            {isDropDownOpen && (
              <div className="absolute bg-white w-[120px] h-[90px] rounded-xl pt-2 top-10 right-0 z-30 mt-4 ml-6">
                <ul className="cursor-pointer">
                  <li className="dropdown-item border-b border-orange-500 hover:bg-slate-200 pl-2 active:bg-slate-300">
                    <span onClick={() => handleNavigation('/signin')}>Sign in</span>
                  </li>
                  <li className="dropdown-item border-b border-orange-500 hover:bg-slate-200 pl-2 active:bg-slate-300">
                    <span onClick={() => handleNavigation('/signup')}>Sign up</span>
                  </li>
                  <li className="dropdown-item border-b border-orange-500 hover:bg-slate-200 pl-2 active:bg-slate-300">
                    <span onClick={() => handleNavigation('/signout')}>Sign out</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;