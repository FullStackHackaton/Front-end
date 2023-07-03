import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
<<<<<<< HEAD
import { productsReducer } from "./products/productsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
=======
import topicsReducer from "./topic/topicsSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    topics: topicsReducer,
>>>>>>> 4fdf58acbfce7acd88513473e9a13efa0380229f
  },
});
