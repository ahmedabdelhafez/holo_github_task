import { createSlice } from "@reduxjs/toolkit";
import { ISearchResultsModel } from "../store-models/ISearchResultsModel.interface";

export const searchResultSlice = createSlice({
  name: "searchResult",
  initialState: {
    searchData: [],
  },
  reducers: {
    setSearchData: (state, action) => {
      state.searchData = action.payload;
    },

    clearSearchResult: (state, action) => {
      state.searchData = [];
    },
  },
});
export const { setSearchData } = searchResultSlice.actions;

export const selectSearchResults = (state: ISearchResultsModel) => {
  return state.searchResult.searchData;
};

export default searchResultSlice.reducer;
