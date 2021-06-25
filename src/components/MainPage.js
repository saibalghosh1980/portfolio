import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Redirect, Route, Switch } from "react-router-dom";
import LoginForm from "./content/LoginForm";
import ProfileForm from "./content/ProfileForm";
import Footer from "./Footer";
import Header from "./Header";
import Menubar from "./Menubar";

export default function MainPage() {
  const [authenticated, setAuthenticated] = useState(() => {
    console.log(
      'sessionStorage.getItem("authenticated")' +
        sessionStorage.getItem("authenticated")
    );
    return sessionStorage.getItem("authenticated") == null ? false : true;
  });
  //This effect will be called when the authenticated state will change
  useEffect(() => {
    //If it's successfully authenticated then the state will be stored in storage or else
    //the entry from session storage will be removed
    authenticated
      ? sessionStorage.setItem("authenticated", authenticated)
      : sessionStorage.clear();
  }, [authenticated]);

  function updateAuthState(val) {
    //alert(val);
    setAuthenticated(val); 
  }

  function guardFunction() {
    alert("Autheticated :: " + authenticated);
    return authenticated;
  }

  return (
    <Container>
      <Row>
        <Col xs={12} md={12} lg={12} xl={12}>
          <Header
            isAuthenticated={authenticated}
            updateAuthentication={updateAuthState}
          />
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
              <Route path="/" exact>
                <Redirect to="/home"/>
              </Route>
              <Route path="/home" exact>
                <LoginForm
                  isAuthenticated={authenticated}
                  updateAuthentication={updateAuthState}
                />
              </Route>
              <Route path="/profile" component={ProfileForm} exact>
                {authenticated ? <ProfileForm /> : <Redirect to="/home" />}
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
