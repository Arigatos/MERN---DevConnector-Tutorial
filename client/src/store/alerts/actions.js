import TYPES from "store/alerts/types";
import { v4 as uuidv4 } from "uuid";

export const setAlert =
  (msg, alertType, timeout = 5000) =>
  (dispatch) => {
    const id = uuidv4();
    dispatch({
      type: TYPES.SET_ALERT,
      payload: { msg, alertType, id },
    });

    setTimeout(
      () => dispatch({ type: TYPES.REMOVE_ALERT, payload: id }),
      timeout
    );
  };
