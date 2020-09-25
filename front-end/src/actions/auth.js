import axios from "axios";
import { signin, signout, authenticate } from "../auth";
import API from "../config";
import { store } from "../index";
import { loadState } from "../auth";

export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";
export const LOAD_USER = "LOAD_USER";
export const AUTH_FAIL = "AUTH_FAIL";

export const loadUser = () => (dispatch) => {
  console.log("running loadUser");
  const data = loadState();
  console.log("loaduser data ", data);
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

export const removeUser = () => (dispatch) => {
  localStorage.removeItem("store");
  store.dispatch({ type: REMOVE_USER });
};

export const fetchuser = (user) => {
  return (dispatch) => {
    return signin(user)
      .then((data) => {
        console.log("data is first here ", data);
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
