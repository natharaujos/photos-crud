import { configureStore } from "@reduxjs/toolkit";
import photosReducer from "./slices/PhotoSlice";

const store = configureStore({
  reducer: {
    photos: photosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
