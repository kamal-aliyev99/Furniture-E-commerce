import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  logined: false,
  userData: {},
  userWishlist: [],
  userCart: [],
  userId: null,

}

export const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload.userData;
      state.userWishlist = action.payload.userData.wishlist;
      state.userCart = action.payload.userData.cart;
      state.userId = action.payload.userData.userId;
      state.logined = true;
    },
    
    logoutUser: (state, action) => {
      state.userData = {};
      state.userWishlist = [];
      state.userCart = [];
      state.userId = null;
      state.logined = false;
    },

  },
})

export const { setUserData, logoutUser } = userSlice.actions

export default userSlice.reducer