import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../providers/store";

interface AuthState {
  isAuthenticated: boolean;
  user: {
    email: string;
  };
  accessToken: string;
}

const initialState: Partial<AuthState> = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>): void => {
      state.isAuthenticated = action.payload;
    },
    logOut: (state): void => {
      state.accessToken = undefined;
      state.user = undefined;
      state.isAuthenticated = false;
    },
  },
});

export const { setIsAuthenticated, logOut } = authSlice.actions;

export const selectIsAuthenticated = (state: RootState) =>
  state.authReducer.isAuthenticated;

export const authReducer = authSlice.reducer;
