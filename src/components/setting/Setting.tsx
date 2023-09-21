import React from 'react'
import { useTheme } from '../../contexts/Theme.context'
import './PopUp.style.scss';

const Setting: React.FC = () => {

  const {theme} = useTheme();
  const {setSettingButton, settingButton} = useTheme();
  const handleSettingButton:React.MouseEventHandler<HTMLDivElement>= ()=>{
    setSettingButton(!settingButton);
  }

  return (
    <div>
      <div style={{...theme as React.CSSProperties}} className=' inline cursor-pointer right-0 m-4 absolute' onClick={handleSettingButton}
      onFocus={()=>console.log("focus")}>
      <i className="fa fa-gear gear-color text-2xl"></i>
    </div>
    </div>
    
  )
}

export default Setting
