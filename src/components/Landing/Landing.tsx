import React from 'react';
import './Landing.style.scss';
// import './Landing.css';
import { useTheme } from '../../contexts/Theme.context';

const Landing: React.FC = () => {

  const {theme} = useTheme();
  console.log(theme);
  return (
    <div style={{...theme as React.CSSProperties}} className='grid h-screen gap-6 items-end grid-rows-2 grid-cols-3 content-end background'>
      <div className='text-5xl col-span-2 col-start-2 heading'>React JS IDE ON YOUR BROWSER</div>
      <button className=' w-40 py-4 rounded-xl mb-4 col-start-2 register-button'>Register</button>
      <button className=' w-40 py-4 rounded-xl mb-4 login-button'>Login</button>
    </div>
  )
}

export default Landing;
