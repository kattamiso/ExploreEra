import { SidebarData } from "./SidebarData"
import User from "../../../../public/Icons/User/User_01.png"

const Navbar = () => {
  return (
    <div>
    <nav className="flex sticky top-0 z-20 justify-between items-center px-20 py-2 pt-8">
        <h1 className="text-5xl font-kalnia text-white">ExploreEra</h1>
        <ul className="flex items-center gap-7">
          {SidebarData.map((val, key) => (
            <li
              key={key}
              className="cursor-pointer text-3xl text-white"
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              {val.title}
            </li>
          ))}
          <img src={User} alt="userImage" className="w-8 h-8" />
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
