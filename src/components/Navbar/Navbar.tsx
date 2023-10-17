import React, { useState } from "react";
import { useTheme } from "../../contexts/Theme.context";
import "./Navbar.style.scss";
import { Link } from "react-router-dom";
import SettingMenu from "../settingMenu/SettingMenu";
import NavItems from "../navItems/NavItems.tsx";
// import CheckOutSide from "../CheckOutside";

const Navbar = () => {
  const { theme } = useTheme();
  const [openSettingDropdown, setOpenSettingDropdown] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div
      className="flex justify-between h-[72px] items-center nav-background"
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

      <ul className="navbar-list list-style">
        <NavItems
          setOpenSettingDropdown={setOpenSettingDropdown}
          openSettingDropdown={openSettingDropdown}
          handleToggle={handleToggle}
        />
      </ul>

      <ul className={`sidebar list-style ${toggle ? "" : "none"}`}>
        <NavItems
          setOpenSettingDropdown={setOpenSettingDropdown}
          openSettingDropdown={openSettingDropdown}
          handleToggle={handleToggle}
        />
      </ul>
      {openSettingDropdown && <SettingMenu />}
    </div>
  );
};

export default Navbar;
