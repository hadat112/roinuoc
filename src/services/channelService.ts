import APIClient from "../core/utils/apiclient";
import { AxiosResponse, AxiosInstance } from "axios";

const apiclient = new APIClient().getInstance();

class PlayService {
  async getPlayList() {
    try {
      const res = await apiclient.get("/");
      return res.data?.data;
    } catch (err) {
      return [];
    }
  }
}

export const playService = new PlayService();
