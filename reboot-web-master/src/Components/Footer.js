import React, { Component } from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import "./assets/css/footer.css";
const Styles = styled.div`
  .jumbo {
    background-color: #1a1a1a;

    color: #737373;
    height: 300px;
    positon: relative;
    z-index: -2;
  }
  .fb {
    height: 50px;
    width: 50px;
  }
  .insta {
    height: 50px;
    width: 50px;
  }
`;

export default () => {
  return (
    <Styles>
      <Jumbo fluid className="jumbo">
        <div className="container">
          <div className="row">
            <div
              className="col-md-3 col-sm-6 "
              style={{ borderRight: "1px solid white" }}
            >
              <h4>Visit Kerala</h4>
              <ul className="list-unstyled">
                <li> See & Do</li>
                <li>Festivals & Events</li>
                <li>Shop</li>
                <li>Stay</li>
                <li>Traveller Essentials</li>
              </ul>
            </div>
            <div
              className="col-md-3 col-sm-6 "
              style={{ borderRight: "1px solid white" }}
            >
              <h4>Emergency Numbers</h4>
              <ul className="list-unstyled">
                <li> Police Station:100 </li>
                <li>Ambulance:108</li>
                <li>Crime stopper:1098</li>
              </ul>
            </div>
            <div
              className="col-md-3 col-sm-6 "
              style={{ borderRight: "1px solid white" }}
            >
              <h4>Other resources</h4>
              <a href="https://www.keralatourism.org/">Kerala Tourism</a>
            </div>
            <div className="col-md-3 col-sm-6 ">
              <h4>Connect with us on</h4>
              <img
                src="https://i.ya-webdesign.com/images/facebook-clipart-round-9.png"
                className="fb"
              />
              <img
                src="https://cdn2.iconfinder.com/data/icons/cv-curriculum-vitae/100/set_cv3ok-07-512.png"
                className="insta"
              />
            </div>
          </div>
        </div>
      </Jumbo>
    </Styles>
  );
};
