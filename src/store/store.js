import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import topicsReducer from "./topic/topicsSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    topics: topicsReducer,
  },
});
