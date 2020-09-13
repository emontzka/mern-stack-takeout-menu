import axios from "axios";
import { signin, authenticate } from "../auth";
import thunk from "redux-thunk";

export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";

const initialState = {};

export const addUser = (user = initialState) => ({
  type: ADD_USER,
  user,
});

export const removeUser = () => ({
  type: REMOVE_USER,
});

export const fetchuser = (user) => {
  return (dispatch) => {
    return signin(user)
      .then((data) => {
        console.log("data is first ", data);
        dispatch(addUser(data.user));
        // authenticate(data.token, () => {
        //   console.log("testing");
        // });
        return data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };
};

export const removeUserThunk = () => {
  return (dispatch) => {
    return;
  };
};

//thunk: signout  then dispatch removeuser.
