/**
 * This is the entry point for the Webpack4.0
 */
import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import App from "./js/App.js";
// import Home from "./js/components/content/Home";
// import About from "./js/components/content/About";
// import Contact from "./js/components/content/Contact";
import { Main } from "./js/main";
let root = document.getElementById("app");

ReactDOM.render(<Main />, root);
/**
 * This is the to demonstrate the usage of un-mounting the component.
 */
// setTimeout(() => {
//   alert("hi unmounting the app now!!");
//   ReactDOM.unmountComponentAtNode(root);
//   root.innerHTML = "WOW!!!!!!!!";
// }, 35000);
