import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

export default class DefaultForm extends Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Row>
            <Col xs={4} align="right">
              <Form.Label>Email address</Form.Label>
            </Col>
            <Col xs={1}></Col>
            <Col align="left">
              <Form.Control type="email" placeholder="Enter email" />
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
              <Form.Control type="password" placeholder="Password" />
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
