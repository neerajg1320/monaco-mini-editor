import React from "react";
import "./Landing.style.scss";
import { useTheme } from "../../contexts/Theme.context";
import { Link } from "react-router-dom";

const Landing: React.FC = () => {
  const { theme } = useTheme();
  console.log(`landing page`);
  return (
    <div
      style={{ ...(theme as React.CSSProperties) }}
      className="flex flex-col justify-end p-14 items-center sm:grid min-h-[88vh] gap-6 sm:items-end grid-rows-2 sm:grid-cols-3 grid-cols-1 sm:content-end sm:justify-start background sm:p-0"
    >
      
      <div className="text-5xl col-span-2 col-start-2 heading">
        React JS IDE ON YOUR BROWSER
      </div>
      <div className="col-start-2">
        <Link to="/register">
          <button className=" w-40 py-4 rounded-xl mb-4  register-button">
            Register
          </button>
        </Link>
      </div>
      <div>
        <Link to="/login">
          <button className=" w-40 py-4 rounded-xl mb-4 login-button">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
