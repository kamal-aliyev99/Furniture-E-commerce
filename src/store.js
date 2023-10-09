import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './features/products/productsSlice'
import userSlice from './features/user/userSlice'
import filterSlice from './features/filter/filterSlice'

export const store = configureStore({
  reducer: {
    productsData: productsSlice,
    userData: userSlice,
    filter: filterSlice,
  },
})