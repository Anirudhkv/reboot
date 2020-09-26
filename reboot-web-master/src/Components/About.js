import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import log from "./assets/images/log.png";
import styled from "styled-components";
import Footer from "./Footer";

import "./assets/css/about.css";
const Styles = styled.div`
  .ho {
    hieght: 300px;
    width: 300px;
    display: block;
    margin: 0 auto;
  }
`;

class About extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.setCurrentLink("about");
  }

  render() {
    return (
      <div>
        <Styles>
          <div class="container">
            <div class="row">
              <div className="col-md-3 col-lg-6">
                <img src={log} className="ho" />
              </div>
              <div className="col-md-3 col-lg-6">
                <h1 className="name">PARAVA</h1>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div
                className="col-md-3 col-sm-6 "
                style={{ borderRight: "1px solid black" }}
              ></div>
            </div>
          </div>
        </Styles>
        <h2 className="abou">About</h2>
        <p className="para">
          Parava gives travellers an explicit overview of the heard Kerala yet
          much more than the sum its numerous attractions.Parava puts an effort
          to make foodgourments,collectors,adventurers,exploreres,culture
          seekers and aspiring socialisers.We'll provide you with:
        </p>
        <div className="container">
          <div className="row">
            <div
              className="col-md-3 col-sm-6 "
              style={{ borderRight: "1px solid white" }}
            >
              <h4>Explore Locale</h4>
              <ul className="list-unstyled">
                <li>Search destination</li>
                <li>Trending events</li>
                <li>Discover glimpses</li>
              </ul>
            </div>
            <div
              className="col-md-3 col-sm-6 "
              style={{ borderRight: "1px solid white" }}
            >
              <h4>Following</h4>
              <ul className="list-unstyled">
                <li>Popular reviews by travel influencers</li>
                <li>Reviews by people you follow</li>
              </ul>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default About;
