import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Route, Switch } from "react-router-dom";
import DefaultForm from "./content/DefaultForm";
import ProfileForm from "./content/ProfileForm";
import LoginForm from "./content/LoginForm";
import Footer from "./Footer";
import Header from "./Header";
import Menubar from "./Menubar";
import { useState } from "react";

export default function MainPage() {
  const [authenticated, setAuthenticated] = useState(false);

  function updateAuthState(val) {
    //alert(val);
    setAuthenticated(val);
  }
  

  return (
    <Container>
      <Row>
        <Col xs={12} md={12} lg={12} xl={12}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={12} xl={12} className="bg-light">
          <Menubar/>
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
              <Route path="/home">
                <LoginForm
                  isAuthenticated={authenticated}
                  updateAuthentication={updateAuthState}
                />
              </Route>
              <Route path="/" component={DefaultForm} exact />
              <Route path="/profile">
                <ProfileForm />
              </Route>
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
  );
}
