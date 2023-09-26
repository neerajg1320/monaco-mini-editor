import React from "react";
import { useTheme } from "../../contexts/Theme.context";
import "./SignIn.style.scss";
import { Link } from "react-router-dom";

const Signin: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{ ...(theme as React.CSSProperties) }}
      className="min-h-[88vh] flex items-start justify-center py-10 signup-background"
    >
      <form className="flex flex-col bg-red-500  items-center py-5 text-lg gap-6 form-background sm:w-1/2 rounded-lg form-box-shadow w-3/4">
        <label className="flex flex-col w-9/12">
          Email
          <input type="text" placeholder="Email" className="mt-0.5" />
          <div className="border"></div>
        </label>
        <label className="flex flex-col w-9/12 ">
          Password
          <input type="password" placeholder="Password" className="mt-0.5" />
          <div className="border"></div>
        </label>
        <div className="text-end w-9/12 hover:underline hover:underline-offset-2">Forgot Password?</div>
        <div className="flex w-9/12 justify-between mt-2">
          <button className="px-5 py-1 rounded-3xl register-form-bg-color text-white">
            Login
          </button>
          <button className="bg-red-600 px-5 py-1 rounded-3xl text-white cancel-button">
            Cancel
          </button>
        </div>
        <div className="">
          Not Registered yet?{" "}
          <Link to="/register">
            <span className="not-member-register hover:underline hover:underline-offset-2">Register</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signin;
