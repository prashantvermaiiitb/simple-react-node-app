/**
 * CONCEPT :- How to import the component and get that appended in the DOM element.
 * this will be used in the build defined in the webpack.config.js
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
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
