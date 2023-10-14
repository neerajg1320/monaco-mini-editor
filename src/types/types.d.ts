export type data = {
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