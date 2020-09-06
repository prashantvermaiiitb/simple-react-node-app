/**
 * CONCEPT :- How to import the component and get that appended in the DOM element.
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
let root = document.getElementById("app");
ReactDOM.render(<App />, root);
