import React, { useState } from "react";
import Layout from "../core/Layout";
import { Form, Button } from "semantic-ui-react";
import { signup } from "../auth";
import { Link } from "react-router-dom";

const Signup = () => {
  const [values, setvalues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { email, password, name, success, error } = values;

  const handleOnChange = (name) => (event) => {
    setvalues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    signup({ password, email, name }).then((data) => {
      console.log("data is ", data);
      if (data.error) {
        setvalues({ ...values, error: data.error, success: false });
      } else {
        setvalues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          success: true,
        });
      }
    });
  };

  const signupForm = () => (
    <Form>
      <Form.Field>
        <label>Name</label>
        <input
          placeholder='Name'
          onChange={handleOnChange("name")}
          value={name}
          placeholder='Name'
        />
      </Form.Field>
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

  const showSuccess = () => (
    <div style={{ display: success ? "" : "none" }}>
      <p>
        New Account Created. <Link to='/signin'>Please sign in.</Link>
      </p>
    </div>
  );

  return (
    <Layout title='Signup'>
      {showError()}
      {showSuccess()}
      {signupForm()}
    </Layout>
  );
};

export default Signup;
