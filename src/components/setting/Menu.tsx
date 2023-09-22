import React from "react";
import SelectionBox from "../selectionBox/SelectionBox";
import "./Menu.style.scss";
import { useTheme } from "../../contexts/Theme.context";
// import CheckOutSide from "../CheckOutside";

const Menu = () => {
  const { theme, setSettingButton } = useTheme();

  console.log('Menu')
  return (
    <div
      style={{ ...(theme as React.CSSProperties) }}
      className=" w-[20%] absolute right-0 top-[19%] mr-4 p-3 menu-background font-bold box-shadow-menu"
      onMouseEnter={()=>setSettingButton(true)}
      onMouseLeave={()=>setSettingButton(false)}
    >
      {/* <div className="w-2 h-2 bg-black"></div> */}
      
      <div className="flex gap-2">
        <h2 className="mb-2">Select Theme</h2>
        {/* <CheckOutSide onClickOutside={setSettingButton}> */}
          <SelectionBox />
        {/* </CheckOutSide> */}
      </div>
    </div>
  );
};

export default Menu;
