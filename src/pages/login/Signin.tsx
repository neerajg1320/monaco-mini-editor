import React, { useState } from "react";
import { useTheme } from "../../contexts/Theme.context";
import "./SignIn.style.scss";
import { Link } from "react-router-dom";
import FormField from "../../components/formField/FormField";

const Signin: React.FC = () => {
  const { theme } = useTheme();
  const [resetMsg, setResetMsg] = useState<boolean>();

  const handleForgotPassword = () => {
    console.log("hello out");
      setResetMsg(true);
      setTimeout(() => {
        setResetMsg(false);
      }, 60000);
  };

  return (
    <div
      style={{ ...(theme as React.CSSProperties) }}
      className="min-h-[88vh] flex items-start justify-center py-24 signup-background"
    >
      <form className="flex flex-col bg-red-500  items-center pt-14 pb-9 text-lg gap-6 form-background sm:w-1/2 rounded-lg form-box-shadow w-3/4">
      <FormField fieldName="Email" fieldType="text"/>
       <FormField fieldName="Password" fieldType="password"/>

        <div
          className="text-end w-9/12 hover:underline hover:underline-offset-2 cursor-default"
          onClick={handleForgotPassword}
        >
          Forgot Password?
        </div>
        <div className="flex w-9/12 justify-between mt-5">
          <button className="px-5 py-1 rounded-3xl register-form-bg-color text-white">
            Login
          </button>
          <button className="bg-red-600 px-5 py-1 rounded-3xl text-white cancel-button">
            Cancel
          </button>
        </div>
        <div className="text-center">
          Not Registered yet?{" "}
          <Link to="/register">
            <span className="not-member-register hover:underline hover:underline-offset-2">
              Register
            </span>
          </Link>
          <div className={`mt-1 text-slate-800 ${resetMsg? 'block': 'invisible'}`}>
            Password Reset Email has been Sent
          </div>
        </div>     
      </form>
    </div>
  );
};

export default Signin;