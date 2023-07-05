import { createSlice } from "@reduxjs/toolkit";
import {
  getAllComments,
  getEvents,
  getOneComment,
  getOnePost,
  getTopic,
  leaveComment,
} from "./topicsActions";

const initialState = {
  posts: [],
  news: [],
  comments: [],
  onepost: {},
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
      .addCase(getAllComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(getOnePost.fulfilled, (state, action) => {
        state.onepost = action.payload;
      });
  },
});

export const postsReducer = postsSlice.reducer;
