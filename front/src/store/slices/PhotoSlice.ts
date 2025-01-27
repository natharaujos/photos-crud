import Photo from "@/models/Photo";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PhotoState {
  photos: Photo[];
}

const initialState: PhotoState = {
  photos: [],
};

const photoSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    addPhoto: (state, action: PayloadAction<Photo>) => {
      state.photos.push(action.payload);
    },
  },
});

export const { addPhoto } = photoSlice.actions;
export default photoSlice.reducer;
