import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
// import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { Card, List, Item, Divider, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { loadUser } from "../actions/auth";

// { isAuthenticated, user: { name } }
const UserDashboard = ({ isAuthenticated, user }) => {
  return !user ? null : (
    <Layout>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Card fluid>
              <Card.Content>
                <Card.Header>User Links</Card.Header>
                <Divider />
                {user._id !== null && (
                  <List>
                    <List.Item>My Cart</List.Item>
                    <List.Item>Update Profile</List.Item>
                  </List>
                )}
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column width={12}>
            <Card fluid>
              <Card.Content>
                <Card.Header>User Information</Card.Header>
                <Divider />
                {user !== null && (
                  <List>
                    <List.Item>{user.name}</List.Item>
                    <List.Item>{user.email}</List.Item>
                    <List.Item>
                      {user.role === 1 ? "Admin" : "Registered User"}
                    </List.Item>
                  </List>
                )}
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  // auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, { loadUser })(UserDashboard);
