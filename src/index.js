/**
 * This is the entry point for the Webpack4.0
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./js/App.js";

let root = document.getElementById("app");

ReactDOM.render(<App />, root);
/**
 * This is the to demonstrate the usage of un-mounting the component.
 */
setTimeout(() => {
  alert("hi unmounting the app now!!");
  ReactDOM.unmountComponentAtNode(root);
  root.innerHTML = "WOW!!!!!!!!";
}, 35000);
