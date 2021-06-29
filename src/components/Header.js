import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import reacticon from '../react.gif'
import { BiPowerOff } from "@react-icons/all-files/bi/BiPowerOff";
import { useHistory } from "react-router-dom";
import { logOutAction } from "../redux/action/logInOutAction";
import { useDispatch } from "react-redux";



export default function Header(props) {
  //----------------------REDUX---------------------------------
  const dispatch = useDispatch();
  //============================================================
  const history=useHistory()
  const logOutHandler=()=>{
      dispatch(logOutAction({ loggedIn: false }));
      props.updateAuthentication(false);
      history.push("/profile")
  }

  return (
    <Container className="bg-dark text-white" fluid>
        <Row>
          <Col xs="3" align="left">
            <img src={reacticon}  width="64" height="64"/>
          </Col>
          <Col><h2>Saibal's React Shop</h2></Col>
          <Col align="right">{!props.isAuthenticated?<b/>:<Button variant="dark" onClick={logOutHandler}><BiPowerOff/>&nbsp;&nbsp;Logout</Button>}</Col>
        </Row>
      </Container>
  )
}

