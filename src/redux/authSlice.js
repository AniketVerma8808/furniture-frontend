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
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
    },
    updateProfile: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      // console.log("Updated Redux State in Reducer:", state.user);
    },
  },
});

export const { loginSuccess, logoutUser, updateProfile } = authSlice.actions;
export default authSlice.reducer;
