import axios from "axios";
import { signin, signout, authenticate } from "../auth";
import API from "../config";
import { loadState } from "../auth";

export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";
export const LOAD_USER = "LOAD_USER";
export const AUTH_FAIL = "AUTH_FAIL";

export const removeUser = () => {
  return (dispatch) => {
    dispatch({ type: REMOVE_USER });
    localStorage.removeItem("store");
  };
};

export const loadUser = () => (dispatch) => {
  const data = loadState();
  if (data) {
    dispatch({
      type: LOAD_USER,
      data,
    });
  } else {
    dispatch({
      type: AUTH_FAIL,
    });
  }
};

// replace signin with axios call
export const fetchuser = (user) => {
  return (dispatch) => {
    return signin(user)
      .then((data) => {
        dispatch({
          type: ADD_USER,
          data,
        });
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
