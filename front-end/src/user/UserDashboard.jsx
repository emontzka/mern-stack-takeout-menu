import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { Card, List, Item, Divider } from "semantic-ui-react";
// import { getPurchaseHistory } from "./apiUser";
// import moment from "moment";

const UserDashboard = () => {
  const [history, setHistory] = useState([]);
  const {
    user: { _id, name, email, role },
  } = isAuthenticated();

  return (
    <Layout>
      <Card fluid>
        <Card.Content>
          <Card.Header>User Information</Card.Header>
          <Divider />
          <List>
            <List.Item>{name}</List.Item>
            <List.Item>{email}</List.Item>
            <List.Item>{role === 1 ? "Admin" : "Registered User"}</List.Item>
          </List>
        </Card.Content>
      </Card>
    </Layout>
  );
};

export default UserDashboard;
