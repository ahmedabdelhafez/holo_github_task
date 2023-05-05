import axios from "axios";
import { SearchType } from "../core/models/enum/SearchType.enum";
import { Config } from "../core/config/Config";

export const getGithubUsers = () => {
  return axios.get(
    `${Config.BASE_URL}${SearchType.USERS}?since=1&per_page=100`,
    {
      headers: { Authorization: `Bearer ${Config.GITHUB_TOKEN}` },
    }
  );
};

export const getGithubRepository = () => {
  return axios.get(
    `${Config.BASE_URL}${SearchType.REPOSITORY}?since=1&per_page=100`,
    {
      headers: { Authorization: `Bearer ${Config.GITHUB_TOKEN}` },
    }
  );
};
