import React from "react";
import "./Nav.css";

const NavBar = props => (
  <nav>
      <a href="/clicky-game/">{props.title}</a>
      <br></br>
      <p id="rw">{props.rightWrong} </p>
      <p id="cur-sco">Current Score: {props.score} |</p>
      <p id="top-sco"> Top Score: {props.topScore}</p>
  </nav>
);

export default NavBar;