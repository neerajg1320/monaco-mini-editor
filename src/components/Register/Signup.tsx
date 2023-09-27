import React, { useState } from 'react';
import { useTheme } from '../../contexts/Theme.context';
import './Signup.style.scss';
import { Link } from 'react-router-dom';
// import VerifyEmail from '../verifyEmail/VerifyEmail';

const Signup: React.FC = () => {
  const { theme } = useTheme();
  const [verifyEmailMsg, setVerifyEmailMsg] = useState<boolean>(false);

  const handleRegister: React.MouseEventHandler<HTMLButtonElement> = (e)=>{
    e.preventDefault();
    setVerifyEmailMsg(true);
    setTimeout(()=>{
      setVerifyEmailMsg(false);
    },60000)
  }
  console.log(`landing page`);
  return (
    <div
      style={{ ...(theme as React.CSSProperties) }}
      className="min-h-[88vh] flex items-center justify-center py-24 signup-background"
    >
      <form className='flex flex-col bg-red-500  items-center pt-14 text-lg gap-6 pb-10 form-background sm:w-1/2 rounded-lg form-box-shadow w-3/4'>
        <label className='flex flex-col w-9/12'>
          Email
          <input type='text' className='mt-0.5'/>
          <div className='border'></div>
        </label>
        <label className='flex flex-col w-9/12 '>
          Password
          <input type="password" className='mt-0.5'/>
          <div className='border'></div>
        </label>
        <label className='flex flex-col w-9/12'>
          Confirm
          <input type="password" className='mt-0.5'/>
          <div className='border'></div>
        </label>
        <label className='flex flex-col w-9/12' >
          First Name
          <input type='text' className='mt-0.5'/>
          <div className='border'></div>
        </label>
        <label className='flex flex-col w-9/12'>
          Last Name
          <input type='text' className='mt-0.5'/>
          <div className='border'></div>
        </label>
        <div className='flex w-9/12 justify-between mt-7 '>
          <button className='px-5 py-1 rounded-3xl register-form-bg-color text-white' onClick={handleRegister}>Register</button>
          <button className='bg-red-600 px-5 py-1 rounded-3xl text-white cancel-button' >Cancel</button>
        </div>
        <div className="text-center">
          Already Registered?{" "}
          <Link to="/login">
            <span className="not-member-register hover:underline hover:underline-offset-2">Login</span>
          </Link>
        <div className={` mt-2 ${verifyEmailMsg?`block`:`invisible`}`}>Verfication Email has been sent</div>
        </div>
      </form>
    </div>
  )
}

export default Signup
