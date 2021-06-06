import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import reacticon from '../react.gif'



export default function Header() {
  return (
    <Container className="bg-dark text-white" fluid>
        <Row>
          <Col xs="3" align="left">
            <img src={reacticon}  width="64" height="64"/>
          </Col>
          <Col><h2>Saibal's React Shop</h2></Col>
        </Row>
      </Container>
  )
}

