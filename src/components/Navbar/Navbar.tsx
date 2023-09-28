import React, { useState } from "react";
import { useTheme } from "../../contexts/Theme.context";
import "./Navbar.style.scss";
import { Link } from "react-router-dom";
import SettingMenu from "../SettingMenu/SettingMenu";
// import CheckOutSide from "../CheckOutside";

const Navbar = () => {
  const { theme } = useTheme();
  const [toggle, setToggle] = useState(false);
  const [openSettingDropdown, setOpenSettingDropdown] = useState(false);
  const [dropdownCord, setDropdownCord] = useState<{ x: Number; y: Number }>({
    x: 0,
    y: 0,
  });

  const handleSettingDropdown: React.MouseEventHandler<HTMLLIElement> = (e) => {
    setDropdownCord({
      x: e.pageX,
      y: e.pageY,
    });
    setOpenSettingDropdown(!openSettingDropdown);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className="flex justify-between h-[12vh] items-center nav-background"
      style={{ ...(theme as React.CSSProperties) }}
    >
      <div className="pl-14">
        <i
          className="fa fa-bars text-2xl sm:hidden cursor-pointer mr-5"
          onClick={handleToggle}
        ></i>
        <Link to="/">
          <span>WebAppStarter</span>
        </Link>
      </div>

      <ul className={`sidebar ${toggle ? "sidebar" : "none"}`}>
        <li
          className="cursor-pointer sm:hidden absolute top-5 right-5 text-xl"
          onClick={handleToggle}
        >
          <i className="fa fa-close"></i>
        </li>
        <li className="py-4 sm:py-0">HOME</li>
        <li className="py-4 sm:py-0">Contact</li>
        <li className="py-4 sm:py-0">About</li>
        <li className="py-4 sm:py-0 flex items-center justify-center gap-2" onClick={handleSettingDropdown}>
          Setting <span className={`${openSettingDropdown? '-rotate-90': 'rotate-90'} upper duration-100 inline-block text-xl`}>&lt;</span>
        </li>
      </ul>
      {openSettingDropdown && (
        // <CheckOutSide onClickOutside={setOpenSettingDropdown}>
        <SettingMenu dropDownCord={dropdownCord}/>
        // </CheckOutSide>
      )}
    </div>
  );
};

export default Navbar;
