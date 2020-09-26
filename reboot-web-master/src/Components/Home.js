import React, { Component } from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import Footer from "./Footer";
import styled from "styled-components";
import log from "./assets/images/log.png";
import Button from "react-bootstrap/Button";
import phone from "./assets/images/phone.jpg";
import google from "./assets/images/google.png";
import Chatbox from "./Chatbox";
import chat from "./assets/images/chat.png";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./assets/css/home.css";
const Styles = styled.div`
  .horn {
    hieght: 500px;
    width: 300px;
    display: block;
    margin: 10vh auto;
  }
  .phone {
    hieght: 200px;
    width: 400px;
  }
  .jumbo {
    color: #000000;
    height: 200;
    position: relative;
    margin-bottom: 0px !important;
    z-index: 1;
  }
  .gl {
    hieght: 200px;
    width: 200px;
  }

  .cha {
    height: 50px;
    width: 50px;
    z-index: 10;
  }
`;
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      chatOpened: false
    };
  }

  componentDidMount() {
    this.props.setCurrentLink("home");
  }
  render() {
    return (
      <div>
        <Styles>
          <img
            src={chat}
            onClick={() =>
              this.setState({ chatOpened: !this.state.chatOpened })
            }
            className="cha"
          />
          {this.state.chatOpened === false ? <></> : <Chatbox className="hi" />}
          <div className="container">
            <div className="row ">
              <div className="col-md-6 col-sm-12 col-lg-6 pic">
                <br />
                <img className="horn" src={log}></img>
              </div>
              <div className="col-md-6 col-sm-12 col-lg-6 pic">
                <h2 className="one">Parava</h2>
                <p>
                  Parava gives travellers an explicit overview of the heard
                  Kerala yet much more than the sum its numerous
                  attractions.Parava puts an effort to make
                  foodgourments,collectors,adventurers,exploreres,culture
                  seekers and aspiring socialisers.
                </p>
                <a href="/about">
                  <Button variant="outline-primary">Get started</Button>
                </a>
              </div>
            </div>
          </div>
          <br />
          <br />
          <Jumbo className="jumbo">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-12 col-lg-6 pic2">
                  <h2>Get our app online now !!!</h2>
                  <br />
                  <img className="gl" src={google}></img>
                </div>
                <div className="col-md-6 col-sm-12 col-lg-6 pic">
                  <img className="phone" src={phone}></img>
                </div>
              </div>
            </div>
          </Jumbo>
        </Styles>
        <Footer />
      </div>
    );
  }
}

export default Home;
