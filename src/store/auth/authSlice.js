import { createSlice } from "@reduxjs/toolkit";
import { getMyProfile, getUsersProfiles } from "./authActions";

const initialState = {
  user: "",
  error: "",
  myprofile: {},
  usersprofiles: {},
};
export const authSlice = createSlice({
  name: "@auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMyProfile.fulfilled, (state, action) => {
        state.myprofile = action.payload;
      })
      .addCase(getUsersProfiles.fulfilled, (state, action) => {
        state.usersprofiles = action.payload;
      });
  },
});

export const authReducer = authSlice.reducer;

export const { setUser, setError } = authSlice.actions;
