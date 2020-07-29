import React, { useState } from "react";
import Layout from "../core/Layout";
import { Form, Button } from "semantic-ui-react";
import { signin, authenticate } from "../auth";
import { Link, Redirect } from "react-router-dom";

const Signin = () => {
  const [values, setvalues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const { email, password, loading, error, redirectToReferrer } = values;

  const handleOnChange = (name) => (event) => {
    setvalues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setvalues({ ...values, error: false, loading: true });
    signin({ password, email }).then((data) => {
      if (data.error) {
        setvalues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setvalues({
            ...values,
            redirectToReferrer: true,
            loading: false,
          });
        });
      }
    });
  };

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
      return <Redirect to='/' />;
    }
  };

  return (
    <Layout title='Sign In'>
      {showError()}
      {showLoading()}
      {signupForm()}
      {redirectUser()}
    </Layout>
  );
};

export default Signin;
