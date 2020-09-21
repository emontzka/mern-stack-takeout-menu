import { ADD_USER, REMOVE_USER } from "../actions/auth";
const initialState = {
  // token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      console.log("action ", action);
      return {
        ...state,
        user: action.data.user,
        isAuthenticated: true,
        loading: false,
      };
    case REMOVE_USER:
      // localStorage.removeItem("token");
      return {
        ...state,
        user: {},
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
}
