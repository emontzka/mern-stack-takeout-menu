import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { Card, List, Item, Divider, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
// import { getPurchaseHistory } from "./apiUser";
// import moment from "moment";

const UserDashboard = (props) => {
  const [history, setHistory] = useState([]);
  //   const {
  //     user: { _id, name, email, role },
  //   } = isAuthenticated();

  // if (props.auth.user !== null) {
  //   const { _id, name, email, role } = props.auth.user;
  // }
  // const { _id, name, email, role } = props.auth.user;

  return (
    <Layout>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Card fluid>
              <Card.Content>
                <Card.Header>User Links</Card.Header>
                <Divider />
                {props.auth.user !== null && (
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
                {props.auth.user !== null && (
                  <List>
                    <List.Item>{props.auth.user.name}</List.Item>
                    <List.Item>{props.auth.user.email}</List.Item>
                    <List.Item>
                      {props.auth.user.role === 1 ? "Admin" : "Registered User"}
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
  auth: state.auth,
});

export default connect(mapStateToProps)(UserDashboard);
