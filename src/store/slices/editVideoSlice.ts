"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface editVideoState {
  video: {}
}

const initialState: editVideoState = {
  video: {}
};

//slice to hold login info and loading status
export const editVideoSlice = createSlice({
  name: "editVideo",
  initialState,
  reducers: {
    setEditVideo: (state, action) => {
      state.video = action.payload;
    },
    setEditSlides: (state, action) => {
      //console.log(action)
      state.video.slides = action.payload
    }
  },
});

// A small helper of user state for `useSelector` function.
export const getUserState = (state: { user: editVideoState }) => state.user;

// Exports all actions
export const { setEditVideo, setEditSlides } = editVideoSlice.actions;

export default editVideoSlice.reducer;
