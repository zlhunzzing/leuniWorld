import { combineReducers } from "redux";
import Auth from "./Auth";
import Control from "./Control";

const reducers = combineReducers({
  Auth,
  Control,
});

export default reducers;
