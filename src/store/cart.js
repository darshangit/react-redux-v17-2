import { createSlice } from "@reduxjs/toolkit";
import { FIREBASE_URL } from "../FirebaseConst";
import { toggleActions } from "./toggle";

const initialState = { cartItems: [], changed: false };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.cartItems = action.payload.cartItems;
    },
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
      state.changed = true;
    },
    addToCart(state, action) {
      let item = state.cartItems.find((item) => item.id === action.payload.id);
      if (!item) {
        state.changed = true;
        state.cartItems.push(action.payload);
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
