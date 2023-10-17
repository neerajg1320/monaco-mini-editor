import axios, { AxiosError, AxiosResponse, isAxiosError } from "axios";
import { registerResponseData, requestData } from "../types/types";
export class Api {
  BASE_URL = "https://api.webappstarter.com";

  async Post(
    endPoint: string,
    data: requestData
  ): Promise<AxiosResponse<registerResponseData, any> | undefined> {
    try {
      const response = await axios({
        method: "post",
        url: `${this.BASE_URL}${endPoint}`,
        data: data,
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response;
    } catch (err) {
      if (isAxiosError(err)) {
        return (err as AxiosError).response as AxiosResponse;
      }
      throw err;
    }
  }
}
