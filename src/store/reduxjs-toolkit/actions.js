export const PURCHASE = "PURCHASE";
export const DELETE = "DELETE";
export const LOADER = "LOADER";

export const actionDeleteItem = (index) => {
  return (dispatch) => {
    dispatch({ type: LOADER, payload: index });
    setTimeout(() => {
      dispatch({ type: DELETE, payload: index });
      dispatch({ type: LOADER, payload: -1 });
    }, 2000);
  };
};
