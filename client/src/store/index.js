import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "store/compineReducers";

const middleware = [thunk, logger];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
