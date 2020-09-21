import React, { useState } from "react";
import Layout from "../core/Layout";
import { Form, Button } from "semantic-ui-react";
import { signin, authenticate, isAuthenticated } from "../auth";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchuser } from "../actions/auth";

const Signin = (props) => {
  const [values, setvalues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const { email, password, loading, error, redirectToReferrer } = values;
  const { user } = isAuthenticated();

  const handleOnChange = (name) => (event) => {
    setvalues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setvalues({ ...values, error: false, loading: true });
    props.dispatch(fetchuser({ password, email })).then((data) => {
      if (data.error) {
        setvalues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data.token, () => {
          setvalues({
            ...values,
            redirectToReferrer: true,
            loading: false,
          });
        });
      }
    });
  };

  // console.log("props ", props);

  const signupForm = () => (
    <Form>
      <Form.Field>
        <label>Email</label>
        <input
          type='email'
          onChange={handleOnChange("email")}
          value={email}
          placeholder='Email'
        />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input
          placeholder='Password'
          onChange={handleOnChange("password")}
          value={password}
        />
      </Form.Field>
      <Button onClick={clickSubmit}>Submit</Button>
    </Form>
  );

  const showError = () => (
    <div style={{ display: error ? "" : "none" }}>{error}</div>
  );

  const showLoading = () =>
    loading && (
      <div>
        <h2>Loading...</h2>
      </div>
    );

  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user && user.role === 1) {
        return <Redirect to='/admin/dashboard' />;
      } else {
        return <Redirect to='/user/dashboard' />;
      }
    }
  };

  return (
    <Layout title='Sign In'>
      {/* {console.log(props)} */}
      {showError()}
      {showLoading()}
      {signupForm()}
      {redirectUser()}
    </Layout>
  );
};

const mapStateToProps = (user) => {
  return user;
};

export default connect(mapStateToProps)(Signin);
