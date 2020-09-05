/**
 * CONCEPT :- How to import the component and get that appended in the DOM element.
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

ReactDOM.render(<App />, document.getElementById("app"));
