import { createSlice } from "@reduxjs/toolkit";
import {
  getEvents,
  getOneComment,
  getTopic,
  leaveComment,
} from "./topicsActions";

const initialState = {
  posts: [],
  news: [],
  comments: [],
  onecomment: {},
};

export const postsSlice = createSlice({
  name: "@articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTopic.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.news = action.payload;
      })
      // .addCase(leaveComment.fulfilled, (state, action) => {
      //   state.comments = action.payload;
      // })
      .addCase(getOneComment.fulfilled, (state, action) => {
        state.onecomment = action.payload;
      });
  },
});

export const postsReducer = postsSlice.reducer;
