// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('cart')) || [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    deleteFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
    updateCart(state, action) {
      return action.payload;
    },
  },
});

export const { addToCart, deleteFromCart, updateCart } = cartSlice.actions;

export default cartSlice.reducer;
