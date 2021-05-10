import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import toggleReducer from "./toggle";

const store = configureStore({
  reducer: { toggle: toggleReducer, cart: cartReducer },
});

export default store;
