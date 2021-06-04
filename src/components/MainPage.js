import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import Footer from "./Footer";

export default class MainPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={18} md={12}>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4} className="bg-primary" align="left">
            Left Bar...
          </Col>
          <Col xs={12} md={8} className="bg-secondary">
            Main Content......
          </Col>
        </Row>
        <Row>
          <Col xs={18} md={12}>
            <Footer />
          </Col>
        </Row>
      </Container>
    );
  }
}
