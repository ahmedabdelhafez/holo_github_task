import React, { useCallback, useEffect, useState } from "react";
import "./SearchPage.scss";
import UsersResultCard from "./components/users-result_card/UsersResultCard";
import SearchBar from "./components/search_bar/SearchBar";
import ReposResultCard from "./components/repos-result_card/ReposResultCard";
import { IRepository } from "../../core/models/interface/IRepository.interface";
import { IUsers } from "../../core/models/interface/IUsers.interface";
import {
  getGithubRepository,
  getGithubUsers,
} from "../../services/GithubService";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchResults,
  setSearchData,
} from "../../store/slice/SearchResultSlice";
import InfiniteScroll from "react-infinite-scroller";

interface Props {}

const SearchPage = ({}: Props) => {
  const [selectedSearch, SetSelectedSearch] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [searcePageNumber, setSearcePageNumber] = useState(1);

  const [searchResults, setSearchresults] = useState<IUsers[] | IRepository[]>(
    []
  );
  const [searchResultsFilter, setSearchresultsFilter] = useState<
    IUsers[] | IRepository[]
  >([]);
  const dispatch = useDispatch();
  const selectedData = useSelector(selectSearchResults);
  const [fetching, setFetching] = useState(false);

  /**
   * used to handle if the search text have more than or 3 chars
   * and also have a values
   */
  useEffect(() => {
    if (selectedSearch === 1 && searchText.length >= 3) {
      console.log("start search for users");
      debounceGetUser(searchText);
      return;
    }

    if (selectedSearch === 2 && searchText.length >= 3) {
      console.log("start search for repos");
      debounceGetrepos();
      return;
    }

    if (searchText.length < 3 || !searchText) {
      setSearchresultsFilter([]);
      dispatch(setSearchData([]));
      return;
    }
  }, [selectedData.length <= 0 && searchText.length >= 3 && searchText]);

  useEffect(() => {
    console.log("after set search results");
    console.log(selectedData);
    console.log(searchResultsFilter);
  }, [selectedData || searchResultsFilter]);

  /**
   * used to handle the change of the dropdown
   * and the clear the result and call the new api based on the dropdown value
   */
  useEffect(() => {
    onSelectedSearchChange();
  }, [selectedSearch]);

  const onSelectedSearchChange = () => {
    console.log("selected search: ", selectedSearch);
    setSearchresultsFilter([]);
    setSearchresults([]);
    dispatch(setSearchData([]));
    setSearcePageNumber(1);
    if (selectedSearch === 1 && searchText.length >= 3) {
      console.log("start search for users after dropdown");
      debounceGetUser(searchText);
      return;
    }

    if (selectedSearch === 2 && searchText.length >= 3) {
      console.log("start search for repos after dropdown");
      debounceGetrepos();
      return;
    }

    if (searchText.length < 3 || !searchText) {
      setSearchresultsFilter([]);
      dispatch(setSearchData([]));
      return;
    }
  };

  const getUsers = async (text: string) => {
    try {
      const data = await getGithubUsers(searcePageNumber);

      if (data.data) {
        setSearchresultsFilter([]);
        await Promise.all([dispatch(setSearchData(data.data as IUsers[]))]);
        setSearchresultsFilter(
          filterResult(data.data as IUsers[], searchText, 1)
        );
        setSearchresults([...searchResults, ...data.data]);
        setSearcePageNumber(searcePageNumber + 1);
      } else {
        setSearchresultsFilter([]);
        setSearchresults([]);
        dispatch(setSearchData([]));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getUsersPaging = async () => {
    try {
      const data = await getGithubUsers(searcePageNumber);

      if (data.data) {
        setSearchresultsFilter([]);
        await Promise.all([dispatch(setSearchData(data.data as IUsers[]))]);
        setSearchresultsFilter(
          filterResult(data.data as IUsers[], searchText, 1)
        );
        setSearchresults([...searchResults, ...data.data]);
        setSearcePageNumber(searcePageNumber + 1);
      } else {
        setSearchresultsFilter([]);
        setSearchresults([]);
        dispatch(setSearchData([]));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const debounceGetUser = useCallback(debounce(getUsers, 2000), []);

  const getRepos = async () => {
    try {
      const data = await getGithubRepository(searcePageNumber);

      if (data.data) {
        setSearchresultsFilter([]);
        await Promise.all([
          dispatch(setSearchData(data.data as IRepository[])),
        ]);
        setSearchresultsFilter(
          filterResult(data.data as IRepository[], searchText, 2)
        );
        setSearchresults([...searchResults, ...data.data]);
        setSearcePageNumber(searcePageNumber + 1);
      } else {
        setSearchresultsFilter([]);
        setSearchresults([]);
        dispatch(setSearchData([]));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const debounceGetrepos = useCallback(debounce(getRepos, 2000), []);

  const filterResult = (
    resultArr: IUsers[] | IRepository[],
    searchText: string,
    type: 1 | 2
  ) => {
    return type === 1
      ? (resultArr as IUsers[]).filter((ele) => ele.login?.includes(searchText))
      : (resultArr as IRepository[]).filter((ele) =>
          ele.full_name?.includes(searchText)
        );
  };

  useEffect(() => {
    console.log("start filter");
    console.log(
      filterResult(selectedData, searchText, selectedSearch === 1 ? 1 : 2)
    );

    setSearchresultsFilter(
      filterResult(selectedData, searchText, selectedSearch === 1 ? 1 : 2)
    );
  }, [searchText.length > 3]);

  /**
   * used to clear storage and all arrays if search is null
   */
  useEffect(() => {
    setSearchresultsFilter([]);
    dispatch(setSearchData([]));
  }, [!searchText || searchText.length === 0]);

  const loadMoreData = () => {};

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
          {/* <InfiniteScroll
            loadMore={getUsersPaging}
            hasMore={true}
            loader={<>Loading ...</>}
          >
            <ul>
              {searchResults.map((item) => (
                <li key={item.id}>
                  <a href={item.url} target="_blank" rel="noopener">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </InfiniteScroll> */}
          <div className="search-result-grid">
            {/* if search for users */}
            {searchResults.length > 0 &&
              searchResultsFilter.length <= 0 &&
              selectedSearch === 1 &&
              (searchResults as IUsers[]).map((user, idx) => (
                <UsersResultCard
                  user={user}
                  key={"user".concat(idx.toString())}
                />
              ))}
            {selectedSearch === 1 &&
              searchResults.length > 0 &&
              searchResultsFilter.length > 0 &&
              (searchResultsFilter as IUsers[]).map((user, idx) => (
                <UsersResultCard
                  user={user}
                  key={"user".concat(idx.toString())}
                />
              ))}

            {/* if search for repos */}
            {searchResults.length > 0 &&
              searchResultsFilter.length <= 0 &&
              selectedSearch === 2 &&
              (searchResults as IRepository[]).map((repo, idx) => (
                <ReposResultCard
                  repo={repo}
                  key={"repo".concat(idx.toString())}
                />
              ))}
            {selectedSearch === 2 &&
              searchResults.length > 0 &&
              searchResultsFilter.length > 0 &&
              (searchResultsFilter as IRepository[]).map((repo, idx) => (
                <ReposResultCard
                  repo={repo}
                  key={"repo".concat(idx.toString())}
                />
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SearchPage;
