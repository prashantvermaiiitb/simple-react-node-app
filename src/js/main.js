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
import Navigation from "./components/navigation/Navigation.js";
import PageNotFound from "./components/content/PageNotFound.js";
import HOCDemo from "./components/higher-order-components/HigherOrderComponentDemo.js";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import RefDemo from "./components/content/RefDemo.js";
import PureVsImpureDemo from "./components/content/PureVsImpureComponent.js";

/**
 * Main Component just returning Router 
 * @param {*} props 
 */
export const Main = function (props) {
  return (
    <Router>
      <div>
        <Navigation />
        <Header sampleText="Sample text passed as props from the APP." />
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
          <Route path="/ref">
            <RefDemo />
          </Route>
          <Route path="/hoc" component={HOCDemo} />
          <Route path="/pureVsImpure" component={PureVsImpureDemo} />
          <Route exact path="/">
            <App />
          </Route>
          <Route path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};
