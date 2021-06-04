import React, { Component } from "react";
import TestClass from "../TestClass";
import { BigTestClass } from "../BigTestClass";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from 'react-bootstrap/Button'

class Testcomponent extends Component {
  render() {
    const a = new BigTestClass("Saibal");
    a.printName();
    return (
      <Container>
        <Row>
          <Col>Header........</Col>
        </Row>
        <Row>
          <Col xs={6} md={4} className="bg-primary">Left Bar...</Col>
          <Col xs={12} md={8} className="bg-secondary">Main Content......</Col>
          
        </Row>
        <Row>
            <Col>Footer...............</Col>
        </Row>
      </Container>
    );
  }
}
export default Testcomponent;
