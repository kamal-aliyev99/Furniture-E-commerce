import { createSlice } from '@reduxjs/toolkit'
import { useEffect, useState } from 'react';

const initialState = {
  products: [],
  categories: [],
  collections: [],

  loading: true,
  error: "",

}

export const productsSlice = createSlice({
  name: 'productsData',
  initialState,
  reducers: {
    setProductsData: (state, action) => {
      // state.products = action.payload.productsData.products;
      // state.categories = action.payload.productsData.categories;
      // state.collections = action.payload.productsData.collections;
      // state.images = action.payload.productsData.images;

      state.products = action.payload.allProducts;
      state.categories = action.payload.allCategories;
      state.collections = action.payload.allCollections;
      // console.log(action.payload.allCollections);

      state.loading = action.payload.loading;
      state.error = action.payload.getProductsError;
      // console.log("test1");
    },

  },
})

export const { setProductsData } = productsSlice.actions

export default productsSlice.reducer