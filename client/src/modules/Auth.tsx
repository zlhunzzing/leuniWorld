import { createAction } from "redux-actions";

const SIGNIN = "App/Auth/SIGNIN";
const SIGNOUT = "App/Auth/SIGNOUT";

export const signin = createAction(SIGNIN);
// payload: {userId: 1}

export const signout = createAction(SIGNOUT);

const initialState = {
  isSignUserId: null,
};

export default function Auth(state = initialState, action: any) {
  switch (action.type) {
    case SIGNIN:
      console.log(action);
      return { ...state, isSignUserId: action.payload.userId };
    case SIGNOUT:
      return { ...state, isSignUserId: null };
    default:
      return state;
  }
}
