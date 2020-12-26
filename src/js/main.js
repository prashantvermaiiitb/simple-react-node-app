/**
 * CONCEPT :- How to import the component and get that appended in the DOM element.
 * this will be used in the build defined in the webpack.config.js
 */
import React from "react";
import App from "./App.js";
import Home from "./components/content/Home";
import About from "./components/content/About";
import Contact from "./components/content/Contact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

let root = document.getElementById("app");

export const Main = function (props) {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">App</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
