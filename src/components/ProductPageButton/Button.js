import React from "react";
// import { Link } from "react-router-dom";
import "./Button.css";

function Button({ text, btnStyle, link }) {
  return( 
  <button className={btnStyle}>{text}</button>
  )
}

export default Button;
