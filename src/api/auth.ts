import {
  registerResponseData,
  registerRequestData,
  loginRequestData,
  requestData,
} from "../types/types";
import { Api } from "./api";

export const register = async (
  data: registerRequestData,
  setVerifyEmailMsg: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorMsg: React.Dispatch<React.SetStateAction<string[] | undefined>>
) => {
  try {
    const api = new Api();
    let response = await api.Post(
      "/api/v1/auth/registration/",
      data as requestData
    );
    console.log(response);

    if (response?.status == 201) {
      setVerifyEmailMsg(true);
    }

    if (response?.status == 400) {
      if (response.data.email) {
        setErrorMsg((response.data as registerResponseData).email);
      } else if (response.data.non_field_errors) {
        setErrorMsg((response.data as registerResponseData).non_field_errors);
      } else if (response.data.password1) {
        setErrorMsg((response.data as registerResponseData).password1);
      } else if (response.data.password2) {
        setErrorMsg((response.data as registerResponseData).password2);
      }
    }
  } catch (err) {
    throw err;
  }
};

export const login = async (
  data: loginRequestData,
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorMsg: React.Dispatch<React.SetStateAction<string[]>>
) => {
  try {
    const api = new Api();
    let response = await api.Post("/api/v1/auth/login/", data as requestData);

    console.log("login response: ", response);

    if (response?.status == 200) {
      setIsLogin(true);
    }

    if (response?.status == 400) {
      if (response.data.non_field_errors) {
        setErrorMsg(response.data.non_field_errors);
      }
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
};
