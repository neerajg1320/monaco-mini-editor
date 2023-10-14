// import React from 'react'
import { formFieldPropTypes } from "../../types/types";

const FormField = ({fieldName, fieldType, fieldValue, labelName, setFormData, formData}: formFieldPropTypes) => {
  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e)=>{
    
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  return (
    <label className="flex flex-col w-9/12">
      <div>
      {labelName}
      <span className="text-red-600 text-xl">*</span>
      </div>
      <input type={fieldType} name={fieldName} value={fieldValue} className="mt-0.5" onChange={handleInputChange} required/>
      <div className="border"></div>
    </label>
  );
};

export default FormField;
