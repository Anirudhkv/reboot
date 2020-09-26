import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./assets/css/nav.css";

import Logo from "./Logo";

import Home from "./Home";
import About from "./About";
import Faq from "./Faq";
import Trending from "./Trend";
import Services from "./Services";

class Nav extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {}

  setCurrentLink(linkText) {
    // remove from all other links
    var elements = document.querySelectorAll("nav>ul>li>a");
    for (let e of elements) {
      e.classList.remove("active");
    }
    if (linkText == "home") return;
    let el = document.getElementById(linkText);
    let parent = el.parentElement;
    parent.classList.add("active");
  }
  render() {
    return (
      <Router>
        <nav className="nav">
          <ul>
            <li>
              <Link
                to="/services"
                className={
                  window.location.pathname == "/services" ? "active" : ""
                }
              >
                <span class="link" id="services">
                  SERVICES
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={window.location.pathname == "/about" ? "active" : ""}
              >
                <span class="link" id="about">
                  ABOUT
                </span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <Logo size={0} isInline={true} />
              </Link>
            </li>

            <li>
              <Link
                to="/trending"
                className={
                  window.location.pathname == "/trending" ? "active" : ""
                }
              >
                <span class="link" id="trending">
                  TRENDING
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className={window.location.pathname == "/faq" ? "active" : ""}
              >
                <span class="link" id="faq">
                  FAQ
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home setCurrentLink={this.setCurrentLink} />
          </Route>
          <Route path="/about">
            <About setCurrentLink={this.setCurrentLink} />
          </Route>

          <Route path="/trending">
            <Trending setCurrentLink={this.setCurrentLink} />
          </Route>
          <Route path="/faq">
            <Faq setCurrentLink={this.setCurrentLink} />
          </Route>
          <Route path="/services">
            <Services setCurrentLink={this.setCurrentLink} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Nav;
