import { useNavigate } from 'react-router-dom';


const Dropdown = () => {
    const navigate = useNavigate();
    const handleNavigation = (link) => {
        navigate(link);
      };
  return (
    <div>
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
    </div>
  )
}

export default Dropdown