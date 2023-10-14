// import React from 'react'
import { formFieldPropTypes } from "../../types/types";

const FormField = ({fieldName, fieldType}: formFieldPropTypes) => {
  return (
    <label className="flex flex-col w-9/12">
      {fieldName}
      <input type={fieldType} className="mt-0.5" />
      <div className="border"></div>
    </label>
  );
};

export default FormField;
