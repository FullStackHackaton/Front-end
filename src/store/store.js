import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { productsReducer } from "./products/productsSlice";
import topicsReducer from "./topic/topicsSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    topics: topicsReducer,
  },
});
