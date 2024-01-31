import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer.js";
import productReducer from "./productReducer.js";

const store = configureStore({
  reducer: {
    cr: cartReducer,
    pr: productReducer,
  },
});

store.subscribe(() => {
  console.log("configureStore in use", store.getState()); // returns the right state, updates properly
});

export default store;
