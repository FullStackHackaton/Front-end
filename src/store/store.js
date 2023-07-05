import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { productsReducer } from "./products/productsSlice";
import { topicReducer } from "./topic/topicsSlice";
import { cartReducer } from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    topics: topicReducer,
    cart: cartReducer,
  },
});
