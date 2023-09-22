import React from 'react'
import { useTheme } from '../../contexts/Theme.context'
import './Menu.style.scss';

const Setting: React.FC = () => {

  const {theme} = useTheme();
  const {setSettingButton, settingButton} = useTheme();
  const handleSettingButton:React.MouseEventHandler<HTMLDivElement>= ()=>{
    setSettingButton(!settingButton);
  }

  console.log(`Setting -->  settingButton: ${settingButton}`);
  return (
    <div>
      <div style={{...theme as React.CSSProperties}} className=' inline cursor-pointer right-0 m-3 absolute' 
      // onClick={handleSettingButton}
      onMouseEnter={handleSettingButton}
      onMouseLeave={()=>setSettingButton(false)}>
      <i className="fa fa-gear gear-color text-2xl"></i>
    </div>
    </div>
    
  )
}

export default Setting
