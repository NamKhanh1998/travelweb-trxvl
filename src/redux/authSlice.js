import { createSlice } from "@reduxjs/toolkit";
import checkLocalExpiri from "../hooks/checkLocalExpiri";

export default createSlice({
  name: "auth",
  initialState: {
    login: {
      user: checkLocalExpiri("user"),
      loading: false,
      error: null,
    },
    register: {
      loading: false,
      error: false,
      success: false,
    },
    mobile: {
      loading: false,
      error: false,
      success: false,
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.loading = true;
    },
    logInSuccess: (state, action) => {
      state.login.loading = false;
      state.login.user = action.payload;
      state.login.error = false;
    },
    logInFailure: (state, action) => {
      state.login.loading = false;
      state.login.user = false;
      state.login.error = action.payload;
    },
    updateUserSuccess: (state, action) => {
      state.login.loading = false;
      state.login.user = action.payload;
      state.login.error = false;
    },

    logOut: (state) => {
      state.login.loading = false;
      state.login.user = null;
      state.login.error = false;
      state.mobile.loading = false;
      state.mobile.success = false;
      state.mobile.error = false;
    },

    registerStart: (state) => {
      state.register.loading = true;
    },
    registerSuccess: (state, action) => {
      state.register.loading = false;
      state.register.success = action.payload;
      state.register.error = false;
    },
    registerFailure: (state, action) => {
      state.register.loading = false;
      state.register.success = false;
      state.register.error = action.payload;
    },
    updateMobileStart: (state) => {
      state.mobile.loading = true;
    },
    updateMobileSuccess: (state, action) => {
      state.mobile.loading = false;
      state.mobile.success = action.payload;
      state.mobile.error = false;
    },
    updateMobileFailure: (state, action) => {
      state.mobile.loading = false;
      state.mobile.success = false;
      state.mobile.error = action.payload;
    },
  },
});
