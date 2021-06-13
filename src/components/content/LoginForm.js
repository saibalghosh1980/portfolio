import axios from "axios";
import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner'

export default function LoginForm(props) {
  let history = useHistory();
  const [validated, setValidated] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setPageMessage] = useState(null);
  //const [authenticated, setAuthenticated] = useState(false);
  const [loginFormValues, setLoginFormValues] = useState({
    formBasicEmail: "saibal@skg.com",
    formBasicPassword: "",
  });

  const changeHandler = (event) => {
    debugger;
    let id = event.target.id;
    let val = event.target.value;
    setLoginFormValues((prevState) => {
      return { ...prevState, [id]: val };
    });
  };

  const handleSubmit = (event) => {
    debugger;
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      event.preventDefault();
    } else {
      setValidated(true);
      event.preventDefault();
      setLoading(true);
      axios
        .post("http://localhost:8080/login", loginFormValues)
        .then((response) => {
          console.log(response);
          setPageMessage(response.data.loginStatus);
          props.updateAuthentication(true);
        })
        .catch((error) => {
          console.log(error);
          setError(error.response==null?error.message:error.response.data.loginStatus);
          props.updateAuthentication(false);
        }).finally(()=>setLoading(false));

      //history.push("/profile");
    }
  };

  return (
    <div>
      {error == null ? <b /> : <Alert variant="danger">{error}</Alert>}
      {message == null ? <b /> : <Alert variant="primary">{message}</Alert>}
      <Spinner animation="border" hidden={!isLoading}/>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        hidden={props.isAuthenticated}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Row>
            <Col xs={4} align="right">
              <Form.Label>Email address</Form.Label>
            </Col>
            <Col xs={1}></Col>
            <Col align="left">
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                onChange={changeHandler}
                value={loginFormValues.formBasicEmail}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please choose a email.
              </Form.Control.Feedback>
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Row>
            <Col xs={4} align="right">
              <Form.Label>Password</Form.Label>
            </Col>
            <Col xs={1}></Col>
            <Col align="left">
              <Form.Control
                required
                type="password"
                placeholder="Password"
                value={loginFormValues.formBasicPassword}
                onChange={changeHandler}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please choose a password.
              </Form.Control.Feedback>
              {loginFormValues.formBasicEmail}
              <br />
              {validated}
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Row>
          <Col xs={3}></Col>
          <Col>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
          <Col xs={3}></Col>
        </Form.Row>
      </Form>
    </div>
  );
}
