
import User from "../../../public/Icons/User/User.png";
import {  useState } from "react";
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
        const navigate = useNavigate();

    const toggle = () => {
      setIsDropDownOpen((prevState) => !prevState);
    };

    const handleNavigation = (link) => {
      navigate(link);
    };

  return (
    <div className="flex fixed w-screen top-0 z-20 justify-between items-center px-20 py-2 pt-5 bg-[#EAE9E9]">
        <h1  onClick={() => handleNavigation('/')} className="text-5xl cursor-pointer font-kalnia text-[#424244]">
          ExploreEra
        </h1>
        <img src={User} onClick={toggle}/>
        {isDropDownOpen && (
              <div className="absolute bg-white w-[120px] h-[90px] rounded-xl pt-2 top-10 right-0 z-30 mt-10 mr-16">
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
  )
}

export default Header