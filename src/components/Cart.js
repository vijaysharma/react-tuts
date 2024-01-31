import { connect } from "react-redux";
// import { actionDeleteItem } from "../store/configureStore/actions";
import {
  deletePurchasedItem,
  loader,
} from "../store/reduxjs-toolkit/productSlice";

const Cart = ({ cart, loader, deleteItem, itemLoading, name }) => {
  return (
    <div className="customDiv">
      <h3>Cart Component - {name}</h3>
      <hr />
      <ul>
        {cart.map((item, index) => {
          return (
            <li key={index}>
              {loader.deleting && loader.index === index ? (
                `...Deleting`
              ) : (
                <span>
                  {item.pName} - {item.price}
                  <button
                    className="deleteBtn"
                    onClick={() => {
                      itemLoading(index);
                      setTimeout(() => {
                        deleteItem(index);
                        itemLoading(-1);
                      }, 2000);
                    }}
                  >
                    Delete
                  </button>
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.pr.cart,
    loader: state.pr.deleteLoader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (index) => dispatch(deletePurchasedItem(index)),
    itemLoading: (index) => dispatch(loader(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
