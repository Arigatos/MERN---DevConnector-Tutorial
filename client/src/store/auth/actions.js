import { setAlert } from "store/alerts/actions";
import setAuthToken from "utils/setAuthToken";
import TYPES from "store/auth/types";
import axios from "axios";

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    dispatch({ type: TYPES.USER_LOADED.START });

    const res = await axios.get("/api/auth");

    dispatch({
      type: TYPES.USER_LOADED.SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TYPES.USER_LOADED.FAIL,
    });
  }
};

// Register User
export const register = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(formData);

  try {
    dispatch({ type: TYPES.REGISTER.START });

    const res = await axios.post("/api/users", body, config);

    dispatch({
      type: TYPES.REGISTER.SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: TYPES.REGISTER.FAIL,
    });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    dispatch({ type: TYPES.LOGIN.START });

    const res = await axios.post("/api/auth", body, config);

    dispatch({
      type: TYPES.LOGIN.SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: TYPES.LOGIN.FAIL,
    });
  }
};

// Logout User
export const logout = () => (dispatch) => {
  dispatch({ type: TYPES.LOGOUT });
};
