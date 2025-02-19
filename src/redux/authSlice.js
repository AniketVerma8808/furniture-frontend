import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      // console.log("Login API Response:", action.payload);
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("authToken");
    },
    updateProfile: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { loginSuccess, logoutUser, updateProfile } = authSlice.actions;
export default authSlice.reducer;
