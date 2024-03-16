import { NavLink } from "react-router-dom";
import logo from "../assets/—Pngtree—food logo_7932067.png";

function Header() {
  return (
    <nav className="w-full h-32 bg-slate-900 flex justify-evenly items-center">
      <div className="h-full w-[40%] flex justify-center items-center">
        <img className="w-28 h-28" src={logo} alt="restaurant-logo" />
      </div>

      <ul className="w-[60%] h-full flex justify-center items-center space-x-20">
        <li className="text-white text-lg font-sans transition-all ease-in-out duration-200 hover:text-2xl">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="text-white text-lg font-sans transition-all ease-in-out duration-200 hover:text-2xl">
          <NavLink to="menu">Menu</NavLink>
        </li>
        <li className="text-white text-lg font-sans transition-all ease-in-out duration-200 hover:text-2xl">
          <NavLink to="about">About</NavLink>
        </li>
        <li className="text-white text-lg font-sans transition-all ease-in-out duration-200 hover:text-2xl">
          <NavLink to="contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
