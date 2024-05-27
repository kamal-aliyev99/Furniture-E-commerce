import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedCategory: "all",
  selectedCollection: "all",
  selectedSort: "all",

}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    
    selectCollection: (state, action) => {
      state.selectedCollection = action.payload;
    },

    selectSort: (state, action) => {
      state.selectedSort = action.payload;
    },

    resetFilters: (state, action) => {
        state.selectedCategory = "all";
        state.selectedCollection = "all";
        state.selectedSort = "all"
    }

  },
})

export const { selectCategory, selectCollection, selectSort, resetFilters } = filterSlice.actions

export default filterSlice.reducer