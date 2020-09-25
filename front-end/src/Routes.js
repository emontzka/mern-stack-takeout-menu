import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import PrivateRoute from "./auth/PrivateRoute";
import UserDashboard from "./user/UserDashboard";
// import { store } from ".";
import { ADD_USER, loadUser } from "./actions/auth";
// import { loadState } from "./auth";
import { store } from ".";

const Routes = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  });

  // useEffect(() => {
  //   const localStore = window.localStorage.getItem("store");

  //   console.log("local ", JSON.parse(localStore));
  //   if (localStore) {
  //     // const destructured = { ...localStore };
  //     // console.log("d ", destructured);
  //     const local = JSON.parse(localStore);
  //     const obj = JSON.parse(localStore);
  //     console.log("local ", obj);
  //     store.dispatch({
  //       type: ADD_USER,
  //       obj,
  //     });
  //   }
  // }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/signin' exact component={Signin} />
        <PrivateRoute path='/user/dashboard' exact component={UserDashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
