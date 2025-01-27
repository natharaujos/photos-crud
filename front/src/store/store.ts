import { configureStore } from "@reduxjs/toolkit";
import photosReducer from "./slices/PhotoSlice";

const store = configureStore({
  reducer: {
    photos: photosReducer,
  },
});

export default store;
