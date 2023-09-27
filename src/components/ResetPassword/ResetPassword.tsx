import React from "react";
import Navbar from "../Navbar/Navbar";
import { useTheme } from "../../contexts/Theme.context";

const ResetPasswordForm = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{ ...(theme as React.CSSProperties) }}
      className="min-h-[88vh] flex items-start justify-center py-24 signup-background"
    >
      <form className="flex flex-col bg-red-500  items-center py-14 text-lg gap-6 form-background sm:w-1/2 rounded-lg form-box-shadow w-3/4">
        <label className="flex flex-col w-9/12">
          Password
          <input type="password" placeholder="Password" className="mt-0.5" />
          <div className="border"></div>
        </label>
        <label className="flex flex-col w-9/12 ">
          Confirm Password
          <input type="password" placeholder="Password" className="mt-0.5" />
          <div className="border"></div>
        </label>
        <div className="flex w-9/12 justify-between mt-2">
          <button className="px-5 py-1 rounded-3xl register-form-bg-color text-white">
            Set
          </button>
          <button className="bg-red-600 px-5 py-1 rounded-3xl text-white cancel-button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

const ResetPassword = () => {
  return (
    <div>
      <Navbar />
      <ResetPasswordForm />
    </div>
  );
};

export default ResetPassword;
