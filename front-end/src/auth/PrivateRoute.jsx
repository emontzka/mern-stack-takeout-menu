import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
// import { isAuthenticated } from "./index";
import { connect } from "react-redux";

const PrivateRoute = ({
  component: Component,
  auth: { loading, isAuthenticated, user },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuthenticated && !loading ? (
        <Redirect to='/signin/' />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
