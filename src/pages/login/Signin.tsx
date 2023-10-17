import React, { useState } from "react";
import { useTheme } from "../../contexts/Theme.context";
import "./SignIn.style.scss";
import { Link } from "react-router-dom";
import FormField from "../../components/formField/FormField";
import { loginRequestData } from "../../types/types";
import { login } from "../../api/auth";

const Signin: React.FC = () => {
  const { theme } = useTheme();
  const [resetMsg, setResetMsg] = useState<boolean>();
  const [data, setData] = useState<loginRequestData>({
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string[]>([]);

  const handleForgotPassword = () => {
    console.log("hello out");
    setResetMsg(true);
    setTimeout(() => {
      setResetMsg(false);
    }, 60000);
  };

  const handleLogin: React.FormEventHandler<HTMLFormElement> | undefined = async(e)=>{
    e.preventDefault();
    // console.log("data in Signin : ",data);
   await login(data, setIsLogin, setErrorMsg);

   console.log(errorMsg)
  }

  return (
    <div
      style={{ ...(theme as React.CSSProperties) }}
      className="min-h-[88vh] flex items-start justify-center py-24 signup-background"
    >
      <form className="flex flex-col bg-red-500  items-center pt-8 pb-9 text-lg gap-6 form-background sm:w-1/2 rounded-lg form-box-shadow w-3/4" method="POST" onSubmit={handleLogin}>
      <div
          className={` text-red-500 text-center font-bold h-[10px] mb-3  text-sm`}
        >
          {errorMsg}
        </div>
        <FormField
          labelName="Email"
          fieldName="email"
          fieldType="email"
          fieldValue={data.email}
          formData={data}
          required={true}
          setFormData={setData}
        />
        <FormField
          labelName="Password"
          fieldName="password"
          fieldType="password"
          fieldValue={data.password}
          formData={data}
          required={true}
          setFormData={setData}
        />

        <div
          className="text-end w-9/12 hover:underline hover:underline-offset-2 cursor-default"
          onClick={handleForgotPassword}
        >
          Forgot Password?
        </div>
        <div className="flex w-9/12 justify-between mt-5">
          <button className="px-5 py-1 rounded-3xl register-form-bg-color text-white" type="submit">
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
          <div
            className={`mt-1 text-slate-800 ${
              resetMsg ? "block" : "invisible"
            }`}
          >
            Password Reset Email has been Sent
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
