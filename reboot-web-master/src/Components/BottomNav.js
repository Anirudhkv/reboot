import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./assets/css/bottom-nav.css";
import "./assets/css/animate.css";

import Logo from "./Logo";
import Home from "./Home";
import About from "./About";
import Faq from "./Faq";
import Trending from "./Trend";

class BottomNav extends React.Component {
  constructor() {
    super();
    this.setCurrentLink = this.setCurrentLink.bind(this);
  }
  componentDidMount() {}

  setCurrentLink(linkText) {
    // remove from all other links
    var elements = document.querySelectorAll("div.bottomNavRow>a>span");
    for (let e of elements) {
      e.parentNode.classList.remove("active");
    }
    if (linkText == "home") {
      let logoBtn = document.getElementById("logo-sec");
      if (logoBtn.classList.contains("slide-up")) {
        logoBtn.classList.remove("slide-up");
      }
      logoBtn.classList.add("slide-down");
      // logoBtn.style.display = "none";
      return;
    } else {
      let logoBtn = document.getElementById("logo-sec");
      if (logoBtn.classList.contains("slide-down")) {
        logoBtn.classList.remove("slide-down");
      }
      logoBtn.classList.add("slide-up");
      logoBtn.style.display = "inline";
    }
    let el = document.getElementById(linkText);
    if (el == null) return;

    // let parent = el.childNodes[0];
    console.log(el);
    el.parentNode.classList.add("active");
  }
  render() {
    return (
      <Router>
        <div className="bottomnav">
          <div className="bottomNavRow">
            <Link to="/about">
              <span id="about" className="bottom-nav-text">
                About
              </span>
            </Link>
            <span className="logo-sec slide-up" id="logo-sec">
              <Link to="/">
                <Logo size={-1} isInline={true} />
              </Link>
            </span>
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <Home setCurrentLink={this.setCurrentLink} isMobile={true} />
          </Route>
          <Route path="/about">
            <About setCurrentLink={this.setCurrentLink} isMobile={true} />
          </Route>
          <Route path="/trending">
            <Trending setCurrentLink={this.setCurrentLink} isMobile={true} />
          </Route>
          <Route path="/faq">
            <Faq setCurrentLink={this.setCurrentLink} isMobile={true} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default BottomNav;
