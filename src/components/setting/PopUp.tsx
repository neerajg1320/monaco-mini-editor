import React from "react";
import SelectionBox from "../selectionBox/SelectionBox";
import "./PopUp.style.scss"
import { useTheme } from "../../contexts/Theme.context";

const PopUp = () => {

    const {theme} = useTheme();

  return (
    <div style={{...theme as React.CSSProperties}} className=" w-[20%] absolute right-0 top-[10%] mr-4 p-3 menu-background font-bold">
        {/* <div className="w-2 h-2 bg-black"></div> */}
      <div >
        <h2 className="mb-2">Select Theme</h2>
        <SelectionBox />
      </div>
    </div>
  );
};

export default PopUp;
