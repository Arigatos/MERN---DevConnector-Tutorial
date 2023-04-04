import axios from "axios";
import { setAlert } from "store/alerts/actions";
import TYPES from "store/profile/types";

// Get current users profile
export const getProfile = () => async (dispatch) => {
  dispatch({ type: TYPES.GET_PROFILE.START });

  try {
    const res = await axios.get("/api/profile/me");

    dispatch({
      type: TYPES.GET_PROFILE.SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TYPES.GET_PROFILE.ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
