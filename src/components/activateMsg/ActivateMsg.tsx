import React from "react";
import { useTheme } from "../../contexts/Theme.context";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const ActivateMsg = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{ ...(theme as React.CSSProperties) }}
      className="min-h-[88vh] flex items-start justify-center py-24 signup-background"
    >
      <div className="flex flex-col bg-red-500 items-center justify-center py-16 text-lg gap-6 form-background sm:w-1/2 rounded-lg form-box-shadow w-3/4">
        <h2>User Key</h2>
        <div className="flex w-9/12 justify-between mt-5">
          <Link to="/login">
            <button className="px-5 py-1 rounded-3xl register-form-bg-color text-white">
              Activate
            </button>
          </Link>
          <button className="bg-red-600 px-5 py-1 rounded-3xl text-white cancel-button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const ActivateMsgEmail = () => {
  return (
    <>
      <Navbar />
      <ActivateMsg />
    </>
  );
};

export default ActivateMsgEmail;
