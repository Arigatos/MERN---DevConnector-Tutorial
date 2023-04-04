import TYPES from "store/profile/types";

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
};

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.GET_PROFILE.START:
      return {
        ...state,
        loading: true,
      };

    case TYPES.GET_PROFILE.SUCCESS:
      console.log("payload", payload);
      return {
        ...state,
        profile: payload,
        loading: false,
      };

    case TYPES.GET_PROFILE.FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default auth;
