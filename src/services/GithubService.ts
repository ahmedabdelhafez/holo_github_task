import axios from "axios";
import { SearchType } from "../core/models/enum/SearchType.enum";

const baseUrl = "https://api.github.com/";

export const getGithubUsers = (searchText: string) => {
  return axios.get(`${baseUrl}${SearchType.USERS}/${searchText}`);
};

export const getGithubRepository = (searchText: string) => {
  return axios.get(`${baseUrl}${SearchType.REPOSITORY}/${searchText}`);
};
