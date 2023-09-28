import React from 'react'
import SelectionBox from '../selectionBox/SelectionBox'
import "../Navbar/Navbar.style.scss"

type dropDownCord = {
    x: Number,
    y: Number
}

type propTypes = {
    dropDownCord:dropDownCord
}

const SettingMenu = ({dropDownCord}:propTypes) => {
    console.log(`dropDownCord: ${dropDownCord.y}`);
  return (
    <div style={{ border: '1px solid black' }} className={`absolute  w-1/2 text-black  settingMenu-background font-bold mr-4 sm:w-1/4 sm:right-0 dropdown-top`}>
      <div className='py-3 px-4 border-b border-slate-500 hover:bg-slate-300'>General</div>
      <div className='flex gap-5 py-3 px-4 border-b border-slate-500 hover:bg-slate-300'>
        Select Theme
      <SelectionBox/>
      </div>
      <div className='py-3 px-4  hover:bg-slate-300'>Font Size</div>
    </div>
  )
}

export default SettingMenu

// left:`calc(${dropDownCord.x}px - 25%)`
