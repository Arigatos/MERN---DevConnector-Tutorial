import { asyncTypes } from "store/_helper";

const TYPES = {
  ...asyncTypes("REGISTER"),
  ...asyncTypes("USER_LOADED"),
  ...asyncTypes("LOGIN"),
  LOGOUT: "LOGOUT",
};

export default TYPES;
