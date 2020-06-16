import * as types from "../actions/ActionTypes";

const initialState = {
  isChatmount: true,
};

export default function Control(state = initialState, action: any) {
  if (action.types === types.STOP_MOUNT) {
    return { ...state, isChatmount: false };
  } else {
    return state;
  }
}
