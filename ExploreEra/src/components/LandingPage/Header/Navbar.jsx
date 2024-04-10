import { useEffect,useState } from "react";
import { SidebarData } from "./SidebarData"
import User from "../../../../public/Icons/User/User.png"
import User2 from "../../../../public/Icons/User/User2.png"

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 70 ? setSticky(true) : setSticky(false);
    })
  }, [])    
  return (
    <div>
    <nav className={`flex fixed w-screen top-0 z-20 justify-between items-center px-20 py-2 pt-5 ${sticky ? 'white-nav' : ''}`}>
        <h1 className={`text-5xl font-kalnia ${sticky ? 'text-black' : 'text-white'}`}>ExploreEra</h1>
        <ul className="flex items-center gap-7">
          {SidebarData.map((val, key) => (
            <li
              key={key}
              className={`cursor-pointer text-3xl  ${sticky ? 'text-[#424244]' : 'text-white'} hover:text-[#C85100]`}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              {val.title}
            </li>
          ))}
          <img src={sticky ? User : User2} alt="userImage" className="w-8 h-8" />
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
