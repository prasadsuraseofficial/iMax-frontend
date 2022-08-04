import React from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Col } from "reactstrap";
import CustomButton from "../../basic-ui-components/CustomButton";
import "./index.module.css";
const RegistrationForm = () => {
  return (
    <div>
      <h2>Create Your Account</h2>
      <Form>
        <FormGroup row>
          <Col md={6} className="mb-3">
            <Label>First Name</Label>
            <Input
              name="firstName"
              placeholder="Enter your first name "
              type="text"
            />
          </Col>
          <Col md={6} className="mb-3">
            <Label>Last Name</Label>
            <Input
              name="lastName"
              placeholder="Enter your last name"
              type="text"
            />
          </Col>
          <Col md={6} className="mb-3">
            <Label>Email</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Enter your email address"
              type="email"
            />
          </Col>
          <Col md={6} className="mb-3">
            <Label for="examplePassword">Mobile Number</Label>
            <Input
              id="examplePassword"
              placeholder="Enter your mobile number"
              type="number"
            />
          </Col>
          <Col md={6} className="mb-3">
            <Label for="examplePassword">Password</Label>
            <Input
              id="examplePassword"
              placeholder="Enter your password"
              type="password"
            />
          </Col>
          <Col md={6} className="mb-3">
            <Label for="examplePassword">Confirm Password</Label>
            <Input
              id="examplePassword"
              placeholder="Enter confirm password"
              type="password"
            />
          </Col>
        </FormGroup>
        <FormGroup check>
          <Input type="checkbox" />
          <Label check>
            I agree to the <a href="#">terms & conditions.</a>
          </Label>
        </FormGroup>
        {/* <Button className={styles.submitBtn}>Create Profile</Button> */}
        <CustomButton btnText="Create Profile" />
        <FormGroup className="mt-2">
          <p>
            Already a member? <Link to="/login">Sign In </Link> Here!
          </p>
        </FormGroup>
      </Form>
    </div>
  );
};

export default RegistrationForm;
