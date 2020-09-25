import { ADD_USER, REMOVE_USER, AUTH_FAIL, LOAD_USER } from "../actions/auth";
const local = localStorage.getItem("store");
const initialState = {
  token: null,
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
    case LOAD_USER:
      return {
        ...state,
        user: action.data.user,
        token: action.data.token,
        isAuthenticated: true,
        loading: false,
      };
    case REMOVE_USER:
    case AUTH_FAIL:
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
}
