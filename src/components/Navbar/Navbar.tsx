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

      <ul className={toggle?`flex w-1/2 flex-col top-0 absolute  h-screen  justify-start items-center pl-5 sm:justify-around sm:flex-row sm:relative sm:h-auto sm:pl-0 pt-16 sm:pt-0 sm:left-0 sidebar-animation    sm:bg-transparent sm:shadow-none background-sm`:'hidden sm:flex sm:justify-around sm:flex-row  sm:relative sm:h-auto sm:pl-0 pt-16 sm:pt-0 w-1/2 background-lg'}>
        <li className="cursor-pointer sm:hidden absolute top-5 right-5" onClick={handleToggle}>&#10006;</li>
        <li className="py-4 sm:py-0">HOME</li>
        <li className="py-4 sm:py-0">Contact</li>
        <li className="py-4 sm:py-0">About</li>
      </ul>
    </div>
  );
};

export default Navbar;
