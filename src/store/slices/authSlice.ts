"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  accessToken: string;
  refreshToken: string;
  isLoading: boolean;
}

const initialState: AuthState = {
  accessToken: "",
  refreshToken: "",
  isLoading: true,
};

//slice to hold login info and loading status
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

// A small helper of user state for `useSelector` function.
export const getUserState = (state: { user: AuthState }) => state.user;

// Exports all actions
export const { setIsLoading, setTokens } = authSlice.actions;

export default authSlice.reducer;
