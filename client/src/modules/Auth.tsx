import { createAction } from "redux-actions";

const SIGNIN = "App/Auth/SIGNIN";
const SIGNOUT = "App/Auth/SIGNOUT";

export const signin = createAction(SIGNIN);
// payload: {userId: 1}

export const signout = createAction(SIGNOUT);

const initialState = {
  signinUserId: null,
};

export default function Auth(state = initialState, action: any) {
  switch (action.type) {
    case SIGNIN:
      return { ...state, signinUserId: action.payload.userId };
    case SIGNOUT:
      return { ...state, signinUserId: null };
    default:
      return state;
  }
}
