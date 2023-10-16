import React, { useState } from "react";
import { useTheme } from "../../contexts/Theme.context";
import "./Signup.style.scss";
import { Link } from "react-router-dom";
import { registerRequestData } from "../../types/types";
import FormField from "../../components/formField/FormField";
import { register } from "../../api/auth";
// import VerifyEmail from '../verifyEmail/VerifyEmail';

const Signup: React.FC = () => {
  const { theme } = useTheme();
  const [verifyEmailMsg, setVerifyEmailMsg] = useState<boolean>(false);
  const [data, setData] = useState<registerRequestData>({
    email: "",
    first_name: "",
    last_name: "",
    password1: "",
    password2: "",
  });
  const [errorMsg, setErrorMsg] = useState<string[] | undefined>();

  
  const handleRegister: React.FormEventHandler<HTMLFormElement> = async(e) => {
    
    // let errorMsg: string[] ;
    e.preventDefault();
    console.log(e);
    await register(data, setVerifyEmailMsg, setErrorMsg);
    console.log("errorMsg",errorMsg);
    // setVerifyEmailMsg(true);
    setTimeout(() => {
      setVerifyEmailMsg(false);
    }, 60000);
  };
  console.log(`landing page`);

  // console.log(`data: `, data);
  return (
    <div
      style={{ ...(theme as React.CSSProperties) }}
      className="min-h-[88vh] flex items-center justify-center py-24 signup-background"
    >
      <form
        className="flex flex-col bg-red-500  items-center pt-14 text-lg gap-6 pb-10 form-background sm:w-1/2 rounded-lg form-box-shadow w-3/4"
        method="POST"
        onSubmit={handleRegister}
      >
        <FormField labelName="Email" fieldType="email" fieldName="email" fieldValue={data.email} setFormData={setData} formData={data}/>
        <FormField labelName="Password" fieldType="password" fieldName="password1" fieldValue={data.password1} setFormData={setData} formData={data}/>
        <FormField labelName="Confirm" fieldType="password" fieldName="password2" fieldValue={data.password2} setFormData={setData} formData={data}/>
        <FormField labelName="First Name" fieldType="text" fieldName="first_name" fieldValue={data.first_name} setFormData={setData} formData={data}/>
        <FormField labelName="Last Name" fieldType="text" fieldName="last_name" fieldValue={data.last_name} setFormData={setData} formData={data}/>
        <div className="flex w-9/12 justify-between mt-7 ">
          <button
            className="px-5 py-1 rounded-3xl register-form-bg-color text-white" type="submit"
            
          >
            Register
          </button>
          <button className="bg-red-600 px-5 py-1 rounded-3xl text-white cancel-button">
            Cancel
          </button>
        </div>
        <div className="text-center">
          Already Registered?{" "}
          <Link to="/login">
            <span className="not-member-register hover:underline hover:underline-offset-2">
              Login
            </span>
          </Link>
          <div className={` mt-2 ${verifyEmailMsg ? `block` : `invisible`}`}>
            Verfication Email has been sent
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
