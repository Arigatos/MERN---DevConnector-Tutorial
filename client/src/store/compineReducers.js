import { combineReducers } from "redux";
import alertsReducer from "store/alerts/reducer";
import authReducer from "store/auth/reducer";
import profileReducer from "store/profile/reducer";

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  alerts: alertsReducer,
});
