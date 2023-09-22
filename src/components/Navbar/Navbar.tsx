import React from 'react'
import { useTheme } from '../../contexts/Theme.context';
import './Navbar.style.scss'

const Navbar = () => {
  const {theme} = useTheme();
  return (
    <div className='flex justify-between pl-14 h-[12vh] items-center nav-background' style={{...theme as React.CSSProperties}}>
      WebAppStarter

      <ul className='flex w-1/2 justify-around'>
        <li>HOME</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </div>
  )
}

export default Navbar
