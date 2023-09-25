import React from 'react';
import { useTheme } from '../../contexts/Theme.context';
import './Signup.style.scss';
import { Link } from 'react-router-dom';

const Signup: React.FC = () => {
  const { theme } = useTheme();
  console.log(`landing page`);
  return (
    <div
      style={{ ...(theme as React.CSSProperties) }}
      className="min-h-[88vh] flex items-center justify-center py-10 signup-background"
    >
      <form className='flex flex-col bg-red-500  items-center py-5 text-lg gap-6 form-background sm:w-1/2 rounded-lg form-box-shadow w-3/4'>
        <label className='flex flex-col w-9/12'>
          Email
          <input type='text' placeholder='Email' className='mt-0.5'/>
          <div className='border'></div>
        </label>
        <label className='flex flex-col w-9/12 '>
          Password
          <input type="password" placeholder='Password' className='mt-0.5'/>
          <div className='border'></div>
        </label>
        <label className='flex flex-col w-9/12'>
          Confirm
          <input type="password"  placeholder='Confirm password' className='mt-0.5'/>
          <div className='border'></div>
        </label>
        <label className='flex flex-col w-9/12' >
          First Name
          <input type='text' placeholder='First Name' className='mt-0.5'/>
          <div className='border'></div>
        </label>
        <label className='flex flex-col w-9/12'>
          Last Name
          <input type='text' placeholder='Last Name' className='mt-0.5'/>
          <div className='border'></div>
        </label>
        <div className='flex w-9/12 justify-between mt-2'>
          <button className='px-5 py-1 rounded-3xl register-form-bg-color text-white'>Register</button>
          <button className='bg-red-600 px-5 py-1 rounded-3xl text-white' >Cancel</button>
        </div>
        <div className="">
          Already Registered?{" "}
          <Link to="/login">
            <span className="not-member-register">Login</span>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Signup
