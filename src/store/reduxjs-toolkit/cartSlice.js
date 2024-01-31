import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    test: (state, action) => {},
  },
});

export const { test } = cartSlice.actions;
export default cartSlice.reducer;
