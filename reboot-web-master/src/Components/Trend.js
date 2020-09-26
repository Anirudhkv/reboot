import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Footer from "./Footer";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./assets/css/nav.css";
const Styles = styled.div`
  .slide {
    height: 70vh;
    width: 80vw;
    margin: 0 auto;
  }
  .im {
    height: 40vh;
    width: 20vw;
    margin: 0 auto;
  }
  .para {
    height: 40vh;
    width: 20vw;
  }
  .Hea {
    margin-left: 6vh;
  }
`;

class Trending extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.setCurrentLink("trending");
  }

  render() {
    return (
      <div>
        <Styles>
          <Carousel>
            <Carousel.Item>
              <img
                className="slide"
                src="https://www.keralatourism.org/images/enchanting_kerala/large/the_dance_of_the_divine20141124084024_524_1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h2>Theyyam</h2>
                <p>
                  Remain awstruck as theyyam breaks bounds of sacred groves!!
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="slide"
                src="https://uploads.edubilla.com/sports/17/26/vallamkali5.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Kumarakam</h3>
                <p>This summer,date with the blackwater bliss of Kumarakam</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="slide"
                src="https://www.wandertrails.com/blog/wp-content/uploads/2018/05/Neelakurinjiblog.untravel.com-2.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          <br />
          <h1 className="Hea"> Explore By Attraction</h1>
          <br />
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <Image
                  src="https://www.veegaland.com/images/wonderla-bangalore.jpg"
                  className="im"
                  rounded
                />
                <p className="para">
                  <br />
                  <h2>WONDERLA</h2>
                  <br />
                  Wonderla is one of the largest chain of amusement parks in
                  India. It is owned and operated by Wonderla Holidays Limited
                  which is headquartered near Bidadi, 28 kilometres from
                  Bengaluru, Karnataka.
                </p>
              </Col>
              <Col xs={6} md={4}>
                <Image
                  src="https://www.veegaland.com/images/wonderla-bangalore.jpg"
                  className="im"
                  rounded
                />
                <p className="para">
                  <br />
                  <h2>WONDERLA</h2>
                  <br />
                  Wonderla is one of the largest chain of amusement parks in
                  India. It is owned and operated by Wonderla Holidays Limited
                  which is headquartered near Bidadi, 28 kilometres from
                  Bengaluru, Karnataka.
                </p>
              </Col>
              <Col xs={6} md={4} className="im">
                <Image
                  src="https://www.veegaland.com/images/wonderla-bangalore.jpg"
                  className="im"
                  rounded
                />
                <p className="para">
                  <br />
                  <h2>WONDERLA</h2>
                  <br />
                  Wonderla is one of the largest chain of amusement parks in
                  India. It is owned and operated by Wonderla Holidays Limited
                  which is headquartered near Bidadi, 28 kilometres from
                  Bengaluru, Karnataka.
                </p>
              </Col>
            </Row>
          </Container>
        </Styles>
        <Footer />
      </div>
    );
  }
}

export default Trending;
