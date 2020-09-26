import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav";
import BottomNav from "./Components/BottomNav";

function App() {
  const isMobile = window.innerWidth <= 1024;
  if (isMobile) {
    return <BottomNav />;
  } else {
    return (
      <div>
        <Nav />
       
      </div>
    );
  }
}

export default App;
