import React from "react";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { withRouter } from "react-router";

function Menubar(props) {
  return (
    <Nav variant="tabs" defaultActiveKey="/home" activeKey={props.location.pathname}>
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
      <Nav.Item>
        <LinkContainer to="/covid">
          <Nav.Link>Covid</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  );
}

export default withRouter(Menubar);
