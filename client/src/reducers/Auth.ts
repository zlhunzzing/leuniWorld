import * as types from "../actions/ActionTypes";

const initialState = {
  isSignUserId: null,
  isChatmount: true,
};

export default function Auth(state = initialState, action: any) {
  switch (action.type) {
    case types.SIGNIN:
      return { ...state, isSignUserId: action.userId };
    case types.SIGNOUT:
      return { ...state, isSignUserId: null };
    case types.STOP_MOUNT:
      return { ...state, isChatmount: false };
    default:
      return state;
  }
}
