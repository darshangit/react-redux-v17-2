import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      let item = state.cartItems.find((item) => item.id === action.payload);
      item.total += +item.price; 
      item.quantity++;
    },
    removeItem(state, action) {
      let item = state.cartItems.find((item) => item.id === action.payload);

      if (item.quantity === 1) {
        state.cartItems.pop(item);
      } else {
        item.quantity--;
        item.total -= +item.price; 
      }
    },
    addToCart(state, action) {
      let item = state.cartItems.find((item) => item.id === action.payload.id);
      if (!item) {
        state.cartItems.push(action.payload);
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
