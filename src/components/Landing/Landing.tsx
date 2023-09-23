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
      className="grid min-h-[88vh] gap-6 items-end grid-rows-2 grid-cols-3 content-end background"
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
