"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  accessToken: string;
  refreshToken: string;
  isLoading: boolean;
}

/**
 * Default state object with initial values.
 */
const initialState: AuthState = {
  accessToken: "",
  refreshToken: "",
  isLoading: true,
};

/**
 * Create a slice as a reducer containing actions.
 *
 * In this example actions are included in the slice. It is fine and can be
 * changed based on your needs.
 */
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
