import React, { Fragment } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink, withRouter, useHistory } from "react-router-dom";
// import { isAuthenticated } from "../auth";
import { removeUser } from "../actions/auth";
import { connect } from "react-redux";

// const isActive = (history, path) => {
//   if (history.location.pathname === path) {
//       return { color: "#ff9900" };
//   } else {
//       return { color: "#ffffff" };
//   }
// };

const MainNav = ({ isAuthenticated, removeUser }) => {
  let history = useHistory();
  return (
    <Menu>
      <Menu.Item as={NavLink} to='/' name='home'>
        Home
      </Menu.Item>

      {isAuthenticated && (
        <Menu.Item as={NavLink} to='/user/dashboard' name='dashboard'>
          Dashboard
        </Menu.Item>
      )}

      {!isAuthenticated && (
        <Fragment>
          <Menu.Item as={NavLink} to='/signin' name='signin'>
            Sign In
          </Menu.Item>
          <Menu.Item as={NavLink} to='/signup' name='signup'>
            Sign Up
          </Menu.Item>
        </Fragment>
      )}

      {isAuthenticated && <button onClick={removeUser}>Sign Out</button>}
    </Menu>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { removeUser })(MainNav);
