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
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {}

const SearchPage = ({}: Props) => {
  const [selectedSearch, SetSelectedSearch] = useState(1);
  const [searchText, setSearchText] = useState("");

  const [searchResultsFilter, setSearchresultsFilter] = useState<
    IUsers[] | IRepository[]
  >([]);
  const dispatch = useDispatch();
  const selectedData = useSelector(selectSearchResults);
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
    dispatch(setSearchData([]));
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
      return;
    }
  };

  const getUsers = async (text: string) => {
    try {
      const data = await getGithubUsers();

      if (data.data) {
        setSearchresultsFilter([]);
        await Promise.all([dispatch(setSearchData(data.data as IUsers[]))]);
        setSearchresultsFilter(
          filterResult(data.data as IUsers[], searchText, 1)
        );
      } else {
        setSearchresultsFilter([]);
        dispatch(setSearchData([]));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const debounceGetUser = useCallback(debounce(getUsers, 2000), []);

  const getRepos = async () => {
    try {
      const data = await getGithubRepository();

      if (data.data) {
        setSearchresultsFilter([]);
        await Promise.all([
          dispatch(setSearchData(data.data as IRepository[])),
        ]);
        setSearchresultsFilter(
          filterResult(data.data as IRepository[], searchText, 2)
        );
      } else {
        setSearchresultsFilter([]);
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
  }, [searchText]);

  /**
   * used to clear storage and all arrays if search is null
   */
  useEffect(() => {
    setSearchresultsFilter([]);
    dispatch(setSearchData([]));
  }, [!searchText]);

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
            dataLength={searchResults.length} //This is important field to render the next data
            next={fetchData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            // below props only if you need pull down functionality
            // refreshFunction={}
            pullDownToRefresh
            pullDownToRefreshThreshold={50}
            pullDownToRefreshContent={
              <h3 style={{ textAlign: "center" }}>
                &#8595; Pull down to refresh
              </h3>
            }
            releaseToRefreshContent={
              <h3 style={{ textAlign: "center" }}>
                &#8593; Release to refresh
              </h3>
            }
          >
          </InfiniteScroll> */}
          <div className="search-result-grid">
            {searchResultsFilter.length > 0 &&
              selectedSearch === 1 &&
              searchResultsFilter &&
              (searchResultsFilter as IUsers[]).map((user, idx) => (
                <UsersResultCard
                  user={user}
                  key={"user".concat(idx.toString())}
                />
              ))}
            {searchResultsFilter.length > 0 &&
              selectedSearch === 2 &&
              searchResultsFilter &&
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
