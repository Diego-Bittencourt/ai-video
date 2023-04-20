"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface VideoItem {
    _id: string,
    name: string,
    data: {},
    slides: [],
    tags: []
    deleted: boolean,
    status: string,
    public: string,
    parentFolderDeleted: boolean,
    sourceId: string,
    userId: string,
    createdAt: string,
    updatedAt: string,
    thumbnail?: string,
}

export interface VideosListState {
  videosList: VideoItem[]
}

const initialState: VideosListState = {
    videosList: []
};

//slice to hold the video list in the elai.io acc
export const videosListState = createSlice({
  name: 'videosList',
  initialState,
  reducers: {
    setVideosList: (state, action) => {
        //filter the videos that are not deleted and puts it on the store
        state.videosList = action.payload.filter((video: VideoItem) => { return !video.deleted})
    }
  },
});

// A small helper of user state for `useSelector` function.
export const getUserState = (state: { user: VideosListState }) => state.user;

// Exports all actions
export const { setVideosList } = videosListState.actions;

export default videosListState.reducer;
