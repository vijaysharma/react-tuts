import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [
    { pName: "Apple", price: 10 },
    { pName: "Orange", price: 9 },
    { pName: "Pomegranate", price: 30 },
    { pName: "Lemon", price: 12 },
    { pName: "Banana", price: 25 },
  ],
  cart: [],
  total: 0,
  deleteLoader: {
    deleting: false,
    index: -1,
  },
};

const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    purchase: (state, action) => {
      state.cart = [...state.cart, action.payload];
      state.total = state.total + action.payload.price;
    },
    deletePurchasedItem: (state, action) => {
      state.total = state.total - state.cart[action.payload].price;
      state.cart.splice(action.payload, 1);
      state.deleteLoader = {
        deleting: true,
        index: action.payload,
      };
    },
    loader: (state, action) => {
      if (action.payload >= 0) {
        state.deleteLoader = {
          deleting: true,
          index: action.payload,
        };
      } else {
        state.deleteLoader = {
          deleting: false,
          index: action.payload,
        };
      }
    },
  },
});

export const { purchase, deletePurchasedItem, loader } = productSlice.actions;
export default productSlice.reducer;
