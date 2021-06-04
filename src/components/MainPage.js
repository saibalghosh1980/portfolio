import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./Header";
import Footer from "./Footer";
import Menubar from "./Menubar";
import DefaultForm from "./content/DefaultForm";
import ProfileForm from "./content/ProfileForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default class MainPage extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Row>
            <Col xs={12} md={12} lg={12} xl={12}>
              <Header />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={12} xl={12} className="bg-light">
              <Menubar />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={12} xl={12} className="bg-light">
              &nbsp;
            </Col>
          </Row>
          <Row>
            <Col className="bg-light">
              <div>
                <Switch>
                  <Route path="/home" component={DefaultForm} exact />
                  <Route path="/" component={DefaultForm} exact />
                  <Route path="/profile" component={ProfileForm} exact />
                </Switch>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={12} xl={12} className="bg-light">
              &nbsp;
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={12} xl={12} className="bg-dark">
              <Footer />
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    );
  }
}
