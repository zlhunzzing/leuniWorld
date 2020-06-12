import { createStore } from "redux";

export default createStore(function (state: any, action: any) {
  if (state === undefined) {
    return { isSignUserId: null, isChatmount: true };
  }
  if (action.type === "SIGNIN") {
    return Object.assign({}, state, { isSignUserId: action.userId });
  }
  if (action.type === "SIGNOUT") {
    return Object.assign({}, state, { isSignUserId: null });
  }
  if (action.type === "DONTMOUNT") {
    return Object.assign({}, state, { isChatmount: true });
  }
  return state;
}, (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__());
