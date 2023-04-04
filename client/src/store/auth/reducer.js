import TYPES from "store/auth/types";

const initialState = {
  token: localStorage.getItem("token") || null,
  isAuthenticated: false,
  loading: true,
  user: null,
};

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.USER_LOADED.START:
    case TYPES.REGISTER.START:
    case TYPES.LOGIN.START:
      return {
        ...state,
        loading: true,
      };

    case TYPES.USER_LOADED.SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };

    case TYPES.REGISTER.SUCCESS:
    case TYPES.LOGIN.SUCCESS:
      localStorage.setItem("token", payload.token);

      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };

    case TYPES.REGISTER.FAIL:
    case TYPES.USER_LOADED.FAIL:
    case TYPES.LOGIN.FAIL:
    case TYPES.LOGOUT:
      localStorage.removeItem("token");

      console.log("hello");

      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };

    default:
      return state;
  }
};

export default auth;
