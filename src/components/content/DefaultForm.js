import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export default class DefaultForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
    };
  }

  render() {
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {        
        event.preventDefault();
        event.stopPropagation();
      }
      this.setState({validated:true});
    };
    return (
      <Form noValidate validated={this.state.validated} onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Row>
            <Col xs={4} align="right">
              <Form.Label>Email address</Form.Label>
            </Col>
            <Col xs={1}></Col>
            <Col align="left">
              <Form.Control required type="email" placeholder="Enter email" />
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
              <Form.Control required type="password" placeholder="Password" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please choose a password.
              </Form.Control.Feedback>
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
    );
  }
}
