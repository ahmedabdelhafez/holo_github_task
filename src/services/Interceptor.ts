import axios from "axios";
import "../../";
import { Config } from "../core/config/Config";
export const axiosPublic = axios.create({
  baseURL: Config.BASE_URL,
  headers: {
    Authorization: Config.GITHUB_TOKEN,
  },
});
