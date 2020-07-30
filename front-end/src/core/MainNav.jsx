import React, { Fragment } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink, withRouter, useHistory } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";

// const isActive = (history, path) => {
//   if (history.location.pathname === path) {
//       return { color: "#ff9900" };
//   } else {
//       return { color: "#ffffff" };
//   }
// };

const MainNav = () => {
  let history = useHistory();
  return (
    <Menu>
      <Menu.Item as={NavLink} to='/' name='home'>
        Home
      </Menu.Item>

      <Menu.Item as={NavLink} to='/user/dashboard' name='dashboard'>
        Dashboard
      </Menu.Item>

      {!isAuthenticated() && (
        <Fragment>
          <Menu.Item as={NavLink} to='/signin' name='signin'>
            Sign In
          </Menu.Item>
          <Menu.Item as={NavLink} to='/signup' name='signup'>
            Sign Up
          </Menu.Item>
        </Fragment>
      )}

      {isAuthenticated() && (
        <Menu.Item
          onClick={() =>
            signout(() => {
              history.push("/");
            })
          }
        >
          Sign Out
        </Menu.Item>
      )}
    </Menu>
  );
};

export default MainNav;
