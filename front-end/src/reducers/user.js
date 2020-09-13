import { ADD_USER, REMOVE_USER } from "../actions/user";
const initialState = {};

export default function user(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return { ...state, ...action.user };
    case REMOVE_USER:
      return { ...state, user: {} };
    default:
      return state;
  }
}
