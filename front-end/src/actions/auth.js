import axios from "axios";
import { signin, signout, authenticate } from "../auth";
import API from "../config";
import { store } from "../index";

export const ADD_USER = "ADD_USER";
export const REMOVE_USER = "REMOVE_USER";

// export const removeUser = () => ({
//   type: REMOVE_USER,
// });

// console.log("store ", store);

export const removeUser = () => (dispatch) => {
  console.log("func ran");
  localStorage.removeItem("jwt");
  store.dispatch({ type: REMOVE_USER });
};

export const fetchuser = (user) => {
  return (dispatch) => {
    return signin(user)
      .then((data) => {
        console.log("data is first ", data);
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
