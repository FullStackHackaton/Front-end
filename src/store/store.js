import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import topicReducer from "./topic/topicsSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    topics: topicReducer,
  },
});
