import { createStore } from "redux";

export default createStore(function (state: any, action: any) {
  if (state === undefined) {
    return { isSignin: false, isChatmount: true };
  }
  if (action.type === "SIGNIN") {
    return { ...state, isSignin: true };
  }
  if (action.type === "SIGNOUT") {
    return { ...state, isSignin: false };
  }
  if (action.type === "DONTMOUNT") {
    return { ...state, isChatmount: false };
  }
  return state;
}, (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION__());
