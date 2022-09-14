import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "user",
  initialState: {
    profile: {
      loading: false,
      error: null,
      info: null,
    },
    user: {
      loading: false,
      error: null,
      success: false,
    },
    password: {
      loading: false,
      error: null,
      success: false,
    },
  },
  reducers: {
    getPrfStart: (state) => {
      state.profile.loading = true;
    },
    getPrfSuccess: (state, action) => {
      state.profile.loading = false;
      state.profile.info = action.payload;
      state.profile.error = false;
    },
    getPrfFailure: (state, action) => {
      state.profile.loading = false;
      state.profile.info = false;
      state.profile.error = action.payload;
    },

    updateUserStart: (state) => {
      state.user.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.user.loading = false;
      state.user.success = true;
      state.user.error = false;
    },
    updateUserFailure: (state, action) => {
      state.user.loading = false;
      state.user.success = true;
      state.user.error = action.payload;
    },

    updatePasswordStart: (state) => {
      state.password.loading = true;
    },
    updatePasswordSuccess: (state, action) => {
      state.password.loading = false;
      state.password.success = true;
      state.password.error = false;
    },
    updatePasswordFailure: (state, action) => {
      state.password.loading = false;
      state.password.success = false;
      state.password.error = action.payload;
    },

    logOut: (state) => {
      state.profile.loading = false;
      state.profile.info = null;
      state.profile.error = null;
      state.user.loading = false;
      state.user.success = false;
      state.user.error = null;
    },
  },
});
