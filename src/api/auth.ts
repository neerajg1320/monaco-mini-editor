import { registerResponseData, registerRequestData } from "../types/types";
import { Api } from "./api";

export const register = async (
  data: registerRequestData,
  setVerifyEmailMsg: React.Dispatch<React.SetStateAction<boolean>>,
  setErrorMsg: React.Dispatch<React.SetStateAction<string[] | undefined>>
) => {
  try {
    const api = new Api();
    let response = await api.Post("/api/v1/auth/registration/", data);
    console.log(response);

    if (response?.status == 201) {
      setVerifyEmailMsg(true);
    }

    if (response?.status == 400) {
      if (response.data.email) {
        setErrorMsg((response.data as registerResponseData).email);
      }
      if (response.data.non_field_errors) {
        setErrorMsg((response.data as registerResponseData).non_field_errors);
      }
    }
  } catch (err) {
    console.log(err);
  }
};
