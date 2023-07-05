import { createSlice } from "@reduxjs/toolkit";
import { getCategories, getOneProduct, getProducts } from "./productsActions";

const initialState = {
  products: [],
  categories: [],
  oneProduct: null,
};

export const productsSlice = createSlice({
  name: "@products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getOneProduct.fulfilled, (state, action) => {
        state.oneProduct = action.payload;
      });
  },
});

export const productsReducer = productsSlice.reducer;
