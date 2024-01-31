import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice.js";
import productSlice from "./productSlice.js";

const store = configureStore({
  reducer: {
    cr: cartSlice,
    pr: productSlice,
  },
});

store.subscribe(() => {
  console.log("redux slices in use!", store.getState()); // returns the right state, updates properly
});

export default store;
