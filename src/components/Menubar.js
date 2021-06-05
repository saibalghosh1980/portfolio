import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

export default class Menubar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <LinkContainer to="/home" id="id_Home">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/profile">
            <Nav.Link>Profile</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
    );
  }
}
