import { combineReducers, configureStore } from "@reduxjs/toolkit";
import SearchResultSlice from "./slice/SearchResultSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from "redux-persist";
const rootReducer = combineReducers({
  searchResult: SearchResultSlice,
});

const persistConfig = {
  key: "searchResult",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
/* Inferred type: {
      posts: PostsState, comments: CommentsState, users: UsersState
    }
  */
export type AppDispatch = typeof store.dispatch;
