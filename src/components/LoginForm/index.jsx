import React from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import CustomButton from "../../basic-ui-components/CustomButton";
const LoginForm = () => {
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="exampleEmail" hidden>
            Email
          </Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
          />
        </FormGroup>{" "}
        <FormGroup>
          <Label for="examplePassword" hidden>
            Password
          </Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
          />
        </FormGroup>
        <CustomButton btnText="Sign In" />
      </Form>
      <p>
        New to iMax? <Link to="/register">Register</Link> Here!
      </p>
    </div>
  );
};

export default LoginForm;
