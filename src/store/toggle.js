import { createSlice } from "@reduxjs/toolkit";

const initialState = { toggleCart: false, notification: null };

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggle(state) {
      state.toggleCart = !state.toggleCart;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const toggleActions = toggleSlice.actions;
export default toggleSlice.reducer;
