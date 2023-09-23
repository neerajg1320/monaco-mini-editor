import React, { useState } from "react";
import { useTheme } from "../../contexts/Theme.context";
import "./Navbar.style.scss";

const Navbar = () => {
  const { theme } = useTheme();
  const [toggle, setToggle] = useState(false);

  const handleToggle = ()=>{
    setToggle(!toggle);
  }

  return (
    <div
      className="flex justify-between h-[12vh] items-center nav-background"
      style={{ ...(theme as React.CSSProperties) }}
    >
      <div className="pl-14">
        <i className="fa fa-bars text-2xl sm:hidden cursor-pointer mr-5" onClick={handleToggle}></i>
        WebAppStarter
      </div>

      <ul className={`sidebar ${toggle? 'sidebar': 'none'}`}>
        <li className="cursor-pointer sm:hidden absolute top-5 right-5 text-2xl" onClick={handleToggle}><i className="fa fa-close" ></i></li>
        <li className="py-4 sm:py-0">HOME</li>
        <li className="py-4 sm:py-0">Contact</li>
        <li className="py-4 sm:py-0">About</li>
      </ul>
    </div>
  );
};

export default Navbar;
