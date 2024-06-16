import { createSlice } from "@reduxjs/toolkit";
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loggedIn: false,
    userData: null,
  },
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.userData = action.payload;
    },
    logout: (state, action) => {
      state.loggedIn = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
