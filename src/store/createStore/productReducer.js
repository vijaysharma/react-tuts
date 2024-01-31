import * as actionType from "./actions";
const initData = {
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
const productReducer = (state = initData, action) => {
  if (action.type === actionType.PURCHASE) {
    return {
      ...state,
      cart: [...state.cart, action.payload],
      total: state.total + action.payload.price,
    };
  }
  if (action.type === actionType.DELETE) {
    const copyCart = [...state.cart];
    const priceToBeRemoved = copyCart[action.payload].price;
    copyCart.splice(action.payload, 1);
    return {
      ...state,
      cart: copyCart,
      total: state.total - priceToBeRemoved,
      deleteLoader: {
        deleting: true,
        index: action.payload,
      },
    };
  }
  if (action.type === actionType.LOADER) {
    if (action.payload >= 0) {
      return {
        ...state,
        deleteLoader: {
          deleting: true,
          index: action.payload,
        },
      };
    } else {
      return {
        ...state,
        deleteLoader: {
          deleting: false,
          index: action.payload,
        },
      };
    }
  }
  return state;
};

export default productReducer;
