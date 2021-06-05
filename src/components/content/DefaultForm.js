import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import { withRouter } from 'react-router-dom';

class DefaultForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      formBasicEmail: "",
      formBasicPassword: ""
    };
  }

  changeHandler = (event) => {
    debugger;
    let id = event.target.id;
    let val = event.target.value;
    this.setState({[id]: val});

  };

  render() {
    const handleSubmit = (event) => {
      debugger;
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      this.setState({ validated: true });
      console.log(this.state);
      event.preventDefault();
      this.props.history.push('/profile');
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
              <Form.Control
                required
                type="email"
                placeholder="Enter email"
                onChange={this.changeHandler}
                value={this.state.formBasicEmail}
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
              <Form.Control required type="password" placeholder="Password" value={this.state.formBasicPassword} onChange={this.changeHandler}/>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please choose a password.
              </Form.Control.Feedback>
              {this.state.formBasicEmail}
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

export default withRouter(DefaultForm); // <--- make sure to wrap your component with `withRouter()`
