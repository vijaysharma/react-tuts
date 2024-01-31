import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import cartReducer from "./cartReducer.js";
import productReducer from "./productReducer.js";

const rootReducer = combineReducers({
  cr: cartReducer,
  pr: productReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

store.subscribe(() => {
  console.log("createStore in use.", store.getState()); // returns the right state, updates properly
});

export default store;
