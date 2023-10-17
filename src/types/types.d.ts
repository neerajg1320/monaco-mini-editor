export type registerRequestData = {
  email: string;
  first_name: string;
  last_name: string;
  password1: string;
  password2: string;
};

export type formFieldPropTypes = {
  fieldName: string;
  fieldType: string;
  fieldValue: string;
  labelName: string;
  setFormData: React.Dispatch<React.SetStateAction<data>>;
  formData: data;
  required: boolean;
};

type emailError = string[];

type non_field_errors = string[];

export type registerResponseData = {
  email?: emailError;
  non_field_errors?: non_field_errors;
  detail?: string;
  password1?: string[];
  password2?: string[];
};

export type loginRequestData = {
  email: string,
  password: string
}

export type requestData = {
  registerResponseData?: registerRequestData;
  loginRequestData?: loginRequestData
}

type user = {
  pk: number;
  email: string;
  is_anonymous: boolean;
  last_name: string
}

type loginData = {
  access_token: string;
  refresh_token: string;
  user: user
}

export type loginResponseData = {
  data?: loginData
  non_field_error?: string[],

}