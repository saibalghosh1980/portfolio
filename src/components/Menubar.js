import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from 'react-router-bootstrap';


export default class Menubar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: "/home",
    };
  }

  
  render() {
    const handleActiveKey = (keyClicked) => {
      
      this.setState({ activeKey: keyClicked });
    };
    return (
      <Nav
        variant="tabs"
        defaultActiveKey={this.state.activeKey}
        activeKey={this.state.activeKey}
        onSelect={(selectedKey) => handleActiveKey(selectedKey)}
      >
        
          <Nav.Item>
            <LinkContainer to="/home">
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
