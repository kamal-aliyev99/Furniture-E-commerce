import { createSlice } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";

const initialState = {
  products: [],
  categories: [],
  collections: [],
  loading: true,
  error: "",
};

export const productsSlice = createSlice({
  name: "productsData",
  initialState,
  reducers: {
    setProductsData: (state, action) => {
      state.products = action.payload.allProducts;
      state.categories = action.payload.allCategories;
      state.collections = action.payload.allCollections;
      state.loading = action.payload.loading;
    },
    setErrorData: (state, action) => {
      state.error = action.payload.getProductsError;
    },
  },
});

export const { setProductsData, setErrorData } = productsSlice.actions;

export default productsSlice.reducer;
