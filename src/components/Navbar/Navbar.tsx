import React, { useState } from "react";
import { useTheme } from "../../contexts/Theme.context";
import "./Navbar.style.scss";
import { Link } from "react-router-dom";
import SettingMenu from "../settingMenu/SettingMenu";
import ListItem from "./ListItem";
// import CheckOutSide from "../CheckOutside";

const Navbar = () => {
  const { theme } = useTheme();
  const [toggle, setToggle] = useState(false);
  const [openSettingDropdown, setOpenSettingDropdown] = useState(false);

  const handleSettingDropdown = () => {
    setOpenSettingDropdown(!openSettingDropdown);
  };

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

      <ul className={`sidebar ${toggle ? "" : "none"}`}>
        <ListItem>
          <div
            className="cursor-pointer sm:hidden absolute top-5 right-5 text-xl"
            onClick={handleToggle}
          >
            <i className="fa fa-close"></i>
          </div>
        </ListItem>
        <ListItem>Home</ListItem>
        <ListItem>Contact</ListItem>
        <ListItem>About</ListItem>
        <ListItem>
          <div
            className="flex items-center justify-center gap-2"
            onClick={handleSettingDropdown}
          >
            Setting{" "}
            <span
              className={`${
                openSettingDropdown ? "rotate-180" : ""
              } duration-150 inline-block text-xl`}
            >
              <i className="fa fa-caret-down" aria-hidden="true"></i>
            </span>
          </div>
        </ListItem>
      </ul>
      {openSettingDropdown && <SettingMenu />}
    </div>
  );
};

export default Navbar;
