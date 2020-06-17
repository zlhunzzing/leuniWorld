import { combineReducers } from "redux";
import Auth from "./Auth";
import Handle from "./Handle";

const reducers = combineReducers({
  Auth,
  Handle,
});

export default reducers;
