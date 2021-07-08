import { BiPowerOff } from "@react-icons/all-files/bi/BiPowerOff";
import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import reacticon from "../react.gif";
import { logOutAction } from "../redux/action/logInOutAction";
import {useIdleTimer} from "react-idle-timer";

export default function Header(props) {
  //----------------------Timeout-------------------------------
  const handleOnIdle = event => {
    console.log('user is idle', event)
    console.log('last active', getLastActiveTime())
    dispatch(logOutAction({ loggedIn: false }));
    history.push("/profile");
  }

  const handleOnActive = event => {
    console.log('user is active', event)
    console.log('time remaining', getRemainingTime())
  }

  const handleOnAction = event => {
    console.log('user did something', event)
  }

  const { getRemainingTime, getLastActiveTime } = useIdleTimer({
    timeout: 1000 * 60 * .5,
    onIdle: handleOnIdle,
    onActive: handleOnActive,
    onAction: handleOnAction,
    debounce: 500,
  });
  //------------------------------------------------------------
  //----------------------REDUX---------------------------------
  const redux_state_is_logged_in = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  //============================================================
  const history = useHistory();
  const logOutHandler = () => {
    dispatch(logOutAction({ loggedIn: false }));
    history.push("/profile");
  };

  return (
    <Container className="bg-dark text-white" fluid>
      <Row>
        <Col xs="3" align="left">
          <img src={reacticon} width="64" height="64" />
        </Col>
        <Col>
          <h2>Saibal's React Shop</h2>
        </Col>
        <Col align="right">
          {!redux_state_is_logged_in.loggedIn ? (
            <b />
          ) : (
            <Button variant="dark" onClick={logOutHandler}>
              <BiPowerOff />
              &nbsp;&nbsp;Logout
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
}
