import axios from "axios";
import { SearchType } from "../core/models/enum/SearchType.enum";
import { Config } from "../core/config/Config";

export const getGithubUsers = (pageNum: number = 1) => {
  return axios.get(
    `${Config.BASE_URL}${SearchType.USERS}?since=${pageNum}&per_page=50`,
    {
      headers: { Authorization: `Bearer ${Config.GITHUB_TOKEN}` },
    }
  );
};

export const getGithubRepository = (pageNum: number = 1) => {
  return axios.get(
    `${Config.BASE_URL}${SearchType.REPOSITORY}?since=${pageNum}&per_page=50`,
    {
      headers: { Authorization: `Bearer ${Config.GITHUB_TOKEN}` },
    }
  );
};
