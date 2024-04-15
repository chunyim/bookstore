import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { bookListSlice } from "./features/bookList/bookListSlice";

const rootReducer = combineSlices(bookListSlice);
export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
