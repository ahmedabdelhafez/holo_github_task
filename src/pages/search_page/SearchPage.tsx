import React, { useEffect, useState } from "react";
import "./SearchPage.scss";
import UsersResultCard from "./components/users-result_card/UsersResultCard";
import SearchBar from "./components/search_bar/SearchBar";
import ReposResultCard from "./components/repos-result_card/ReposResultCard";
import { IRepository } from "../../core/models/interface/IRepository.interface";
import { IUsers } from "../../core/models/interface/IUsers.interface";
import useInfiniteScroll from "../../shared/hooks/useInfinteScroll";
import {
  getGithubRepository,
  getGithubUsers,
} from "../../services/GithubService";

interface Props {}

const SearchPage = ({}: Props) => {
  const [selectedSearch, SetSelectedSearch] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchresults] = useState<IUsers[] | IRepository[]>(
    []
  );
  const [isFetching, setIsFetching] = useInfiniteScroll(null);

  /**
   * used to handle if the search text have more than or 3 chars
   * and also have a values
   */
  useEffect(() => {
    if (selectedSearch === 1 && searchText.length >= 3) {
      console.log("start search for users");
      return;
    }

    if (selectedSearch === 2 && searchText.length >= 3) {
      console.log("start search for repos");
      return;
    }
  }, [searchText.length >= 3 && searchText]);

  /**
   * used to handle the change of the dropdown
   * and the clear the result and call the new api based on the dropdown value
   */
  useEffect(() => {
    setSearchresults([]);
    if (selectedSearch === 1 && searchText.length >= 3) {
      console.log("start search for users");
      return;
    }

    if (selectedSearch === 2 && searchText.length >= 3) {
      console.log("start search for repos");
      return;
    }
  }, [selectedSearch && !!searchText]);

  const getUsers = async (text: string) => {
    try {
      const data = await getGithubUsers(text);
      if (data.data) {
        setSearchresults(data.data);
      } else {
        setSearchresults([]);
      }
    } catch (error) {}
  };

  const getRepos = async (text: string) => {
    try {
      const data = await getGithubRepository(text);
      if (data.data) {
        setSearchresults([]);
        setSearchresults(data.data);
      } else {
        setSearchresults([]);
      }
    } catch (error) {}
  };

  return (
    <div className="search-page-wrapper">
      <div className="container">
        <section className="search-header-wrapper">
          <SearchBar
            selectedSearchFn={SetSelectedSearch}
            searchType={selectedSearch}
            searchText={searchText}
            setSearchText={setSearchText}
          />
        </section>
        <section className="search-result-wrapper">
          <div className="search-result-grid">
            {searchResults && selectedSearch === 1 ? (
              <UsersResultCard />
            ) : (
              <ReposResultCard />
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SearchPage;
