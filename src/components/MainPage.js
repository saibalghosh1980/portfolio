import React,{useState} from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import LoginForm from "./content/LoginForm";
import ProfileForm from "./content/ProfileForm";
import CovidPage from "./content/covid/CovidPage";
import Footer from "./Footer";
import Header from "./Header";
import Menubar from "./Menubar";
import Alert from "react-bootstrap/Alert";

export default function MainPage() {
  //----Use redux logged-in state-------------------------------------------------
  const redux_state_is_logged_in = useSelector((state) => state.loginReducer);
  console.log(redux_state_is_logged_in);
  //------------------------------------------------------------------------------
  const [alertTimeOut, setAlertTimeOut] = useState(false)

  function guardFunction() {
    //alert("Autheticated :: " + authenticated);
    return null;
  }

  return (
    <Container>
      <Row>
        <Col xs={12} md={12} lg={12} xl={12}>
          <Header onChangeTimeoutState={setAlertTimeOut}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={12} xl={12} className="bg-light">
          <Menubar />
        </Col>
      </Row>
      <Row hidden={!alertTimeOut}>
        <Col xs={12} md={12} lg={12} xl={12} className="bg-light">
        <Alert variant="danger">{`Logged out...Session timed out...`}</Alert>
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
                <Redirect to="/home" />
              </Route>
              <Route path="/home" exact>
                <LoginForm onChangeTimeoutState={setAlertTimeOut}/>
              </Route>
              <Route path="/covid" component={CovidPage} exact>
                {redux_state_is_logged_in.loggedIn ? (
                  <CovidPage />
                ) : (
                  <Redirect to="/home" />
                )}
              </Route>
              <Route path="/profile" component={CovidPage} exact>
                {redux_state_is_logged_in.loggedIn ? (
                  <ProfileForm />
                ) : (
                  <Redirect to="/home" />
                )}
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
