import axios, { AxiosError } from "axios";
import { data } from "../types/types";

const BASE_URL = "https://api.webappstarter.com";

export const register = async (data: data, setVerifyEmailMsg: React.Dispatch<React.SetStateAction<boolean>>) => {
  try {
    const response = await axios({
      method: "post",
      url: `${BASE_URL}/api/v1/auth/registration/`,
      data: data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("response: ", response);
    if(response.status == 201){
        setVerifyEmailMsg(true);
    }
    
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.log( (err as AxiosError).response?.data);
    } else {
      console.log("Non-Axios error: ", err);
    }
  }
};
