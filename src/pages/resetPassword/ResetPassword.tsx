import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { useTheme } from "../../contexts/Theme.context";
import FormField from "../../components/formField/FormField";

const ResetPasswordForm = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{ ...(theme as React.CSSProperties) }}
      className="min-h-[88vh] flex items-start justify-center py-24 signup-background"
    >
      <form className="flex flex-col bg-red-500  items-center py-14 text-lg gap-6 form-background sm:w-1/2 rounded-lg form-box-shadow w-3/4">
        <FormField fieldName="Password" fieldType="password"/>
        <FormField fieldName="Confirm Password" fieldType="password"/>
        <div className="flex w-9/12 justify-between mt-7">
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
