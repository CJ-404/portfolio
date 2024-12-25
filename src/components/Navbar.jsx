import { NavLink } from "react-router-dom";
import { logo } from "../assets/images";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [tapCount, setTapCount] = useState(0);
  const navigate = useNavigate();

  const handleTap = () => {
    setTapCount((prevCount) => prevCount + 1);
  
    if (tapCount === 1) {
      navigate('/login');
      setTapCount(0);
    } else {
      setTimeout(() => setTapCount(0), 300);
    }
  };

  return (
    <header className='header'>
      <div onClick={handleTap}>
        <NavLink to='/'>
          <img src={logo} alt='logo' className='w-18 h-18 object-contain' />
        </NavLink>
      </div>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
        <NavLink to='/blogs' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Blogs
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
