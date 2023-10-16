export type registerRequestData = {
    email: string,
    first_name: string,
    last_name: string,
    password1: string,
    password2: string
}

export type formFieldPropTypes = {
    fieldName: string,
    fieldType: string,
    fieldValue: string,
    labelName: string,
    setFormData: React.Dispatch<React.SetStateAction<data>>,
    formData: data
}

type emailError = string[];

type non_field_errors = string[];

export type registerResponseData= {
    email?: emailError,
    non_field_errors?: non_field_errors,
    detail?: string
}