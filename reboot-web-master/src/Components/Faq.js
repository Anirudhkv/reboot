import React, { Component } from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./assets/css/faq.css";
import Footer from "./Footer";

const Styles = styled.div`
  .on {
    background-color: #e6f2ff;

    color: #000000;
    height: 25vh;
    positon: relative;
  }
  .two {
    background-color: #f2f2f2;
    color: #000000;
    height: 25vh;
    positon: relative;
  }
`;

class Faq extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.setCurrentLink("faq");
  }
  render() {
    return (
      <div>
        <Styles>
          <Container>
            <Row className="on">
              <h4> What time of the year is the best time to visit Kerala?</h4>
              <p>
                Kerala experience pleasant weather through out the year.However
                the ideal time to visit Kerala would be in the month of October
                to March
              </p>
            </Row>

            <Row className="two">
              <h4>
                {" "}
                I've heard that Kerala is a very conservative state,hence what
                kind of clothes would be acceptable here?
              </h4>
              <p>
                Though Kerala is a conservative state ,it is generally relaxed
                towards tourist clothing.
              </p>
            </Row>
            <Row className="on">
              <h4> What time of the year is the best time to visit Kerala?</h4>
              <p>
                Kerala experience pleasant weather through out the year.However
                the ideal time to visit Kerala would be in the month of October
                to March
              </p>
            </Row>

            <Row className="two">
              <br />
              <h4>How many airports are there in Kerala </h4>
              <h4> What time of the year is the best time to visit Kerala?</h4>
              <p>
                Kerala experience pleasant weather through out the year.However
                the ideal time to visit Kerala would be in the month of October
                to March
              </p>
            </Row>
          </Container>
        </Styles>
        <Footer />
      </div>
    );
  }
}

export default Faq;
