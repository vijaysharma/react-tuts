import { useSelector, useDispatch } from "react-redux";
// import * as action from "../store/configureStore/actions";

import { useState } from "react";
import { purchase } from "../store/reduxjs-toolkit/productSlice";

const Purchase = () => {
  const products = useSelector((state) => state.pr.products);
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState();
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <div className="customDiv">
      <h3>Purchase Component</h3>
      <hr />
      <select
        onChange={(e) => {
          setSelectedValue(e.target.value);
          setSelectedItem({
            pName: e.target.selectedOptions[0].text.split(" - ")[0],
            price: parseInt(e.target.selectedOptions[0].text.split(" - ")[1]),
          });
        }}
        value={selectedValue}
      >
        <option value="" disabled hidden>
          Please select an item
        </option>
        {products.map((product, index) => {
          return (
            <option
              key={index}
              value={product.price}
            >{`${product.pName} - ${product.price}`}</option>
          );
        })}
      </select>
      <button
        disabled={!selectedValue}
        onClick={() => {
          if (selectedValue) dispatch(purchase(selectedItem));
          // dispatch({ type: action.PURCHASE, payload: selectedItem });
        }}
      >
        Add to Cart
      </button>
      <button
        disabled={!selectedValue}
        onClick={() => {
          if (selectedValue) setSelectedValue("");
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default Purchase;
