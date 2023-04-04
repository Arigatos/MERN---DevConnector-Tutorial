import TYPES from "store/alerts/types";

const initialState = [];

const alerts = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.SET_ALERT:
      return [...state, payload];
    case TYPES.REMOVE_ALERT:
      return state?.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
};

export default alerts;
