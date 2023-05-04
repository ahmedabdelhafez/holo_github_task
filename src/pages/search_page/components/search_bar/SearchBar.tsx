import { useState } from "react";
import "./SearchBar.scss";

import githubImg from "../../../../assets/icons/github.svg";
import { SearchType } from "../../../../core/models/enum/SearchType.enum";

interface DropdownValues {
  value?: number;
  label?: string;
}

interface Props {
  searchType: number;
  selectedSearchFn: (type: any) => void;
  searchText: string;
  setSearchText: (text: string) => void;
}

const SearchBar = ({
  selectedSearchFn,
  searchType: defaultSearchType,
  searchText,
  setSearchText,
}: Props) => {
  const [dropdownValues, setDropdownValues] = useState<DropdownValues[]>([
    { value: 1, label: SearchType.USERS },
    { value: 2, label: SearchType.REPOSITORY },
  ]);

  const [searchType, setSearchType] = useState(defaultSearchType);

  return (
    <div className="search-bar-wrapper">
      <div className="search-bar-logo">
        <div className="search-logo">
          <img src={githubImg} alt={"github"} width="72px" height={"72px"} />
        </div>
        <div className="search-title">
          <h2 className="title">Github Searcher</h2>
          <p className="subtitle">Search users or repositories below</p>
        </div>
      </div>

      <div className="search-bar-input-box">
        <div className="input-wrapper">
          <input
            type="text"
            className="input-control"
            placeholder="Start typing to search ..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="dropdown-wrapper">
          <select
            className="dropdown-control"
            value={searchType}
            onChange={(e) => {
              setSearchType(parseInt(e.target.value));
              selectedSearchFn(parseInt(e.target.value));
            }}
          >
            {dropdownValues.map((item, idx) => (
              <option key={"item-".concat(idx.toString())} value={item.value}>
                {item.label?.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
