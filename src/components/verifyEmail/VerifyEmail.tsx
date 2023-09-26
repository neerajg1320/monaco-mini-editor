import React from "react";
import Navbar from "../Navbar/Navbar";
import { useTheme } from "../../contexts/Theme.context";
import { Link } from "react-router-dom";

const EmailVerificationBox = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{ ...(theme as React.CSSProperties) }}
      className="min-h-[88vh] flex items-start justify-center py-10 signup-background"
    >
      <div className="flex flex-col bg-red-500 items-center justify-center py-5 text-lg gap-6 form-background sm:w-1/2 rounded-lg form-box-shadow w-3/4">
        <i
          className="fa fa-check-square-o text-5xl text-green-700"
          aria-hidden="true"
        ></i>
        <h2>Email Verified Successfully</h2>
        <Link to="/login">
          <button className="px-5 py-1 rounded-3xl register-form-bg-color text-white">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

const VerifyEmail = () => {
  return (
    <div>
      <Navbar />
      <EmailVerificationBox />
    </div>
  );
};

export default VerifyEmail;
