import { getToken } from "./helper";
import axios, { AxiosError } from "axios";

class APIClient {
  baseURL;
//   tokenType;

  constructor(baseURL?: any, tokenType ?: any) {
    this.baseURL = baseURL || "http://localhost:3000";
    // this.tokenType = tokenType || "token";
  }

  getInstance() {
    const api = axios.create({
      baseURL: this.baseURL,
      timeout: 30000,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    api.interceptors.request.use(
      (config) => {
        // const accessToken = getToken(this.tokenType);
        if (!config.headers) {
          return config;
        }

        // if (accessToken) {
        //   config.headers["chat-token"] = getToken(this.tokenType);
        //   config.headers["Authorization"] = `Bearer ${accessToken}`;
        // }
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );

    api.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const originalRequest = error.config;
        if (error?.response.status !== 401) {
          return Promise.reject(error);
        }
      }
    );

    return api;
  }
}

export default APIClient;
