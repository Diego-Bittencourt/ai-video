//'use client'

import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

//the Auth store contains login information and the isLoading bool to
//toggle the loading modal

//type for the state
type AuthState = {
  loginEmail: string;
  loginPassword: string;
  token: string;
  accessToken: string;
  refreshToken: string;
  isLoading: boolean;
};

//Initial state
const initialState: AuthState = {
  loginEmail: "",
  loginPassword: "",
  token: "",
  accessToken: "",
  refreshToken: "",
  isLoading: false,
};

//Actual slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken(state, action) {
      //setting the accessToken and refreshToken from login fetch
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    setIsLoading(state, action) {
      //toggle the isLoading bool to trigger the loading modal
      state.isLoading = action.payload;
    },
  },
  //special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
        return {
            ...state,
            ...action.payload.auth
        }
    }
  },
}); //end of createSlice function


export const { setAccessToken, setIsLoading } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth.authState;

export default authSlice.reducer