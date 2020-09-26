import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Signup from "./user/Signup";
import Signin from "./user/Signin";
import PrivateRoute from "./auth/PrivateRoute";
import UserDashboard from "./user/UserDashboard";
// import { store } from ".";
import { ADD_USER, loadUser } from "./actions/auth";
import MainNav from "./core/MainNav";
// import { loadState } from "./auth";

const Routes = () => {
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
    <>
      <Switch>
        {/* <Route path='/' exact component={Home} /> */}
        <Route path='/signup' exact component={Signup} />
        <Route path='/signin' exact component={Signin} />
        <PrivateRoute
          path='/user/dashboard'
          exact
          title='title test'
          component={UserDashboard}
        />
      </Switch>
    </>
  );
};

export default Routes;
