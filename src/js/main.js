/**
 * CONCEPT :- How to import the component and get that appended in the DOM element.
 * this will be used in the build defined in the webpack.config.js
 */
import React from "react";
import App from "./App.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation.js";
import PageNotFound from "./components/content/PageNotFound.js";
import HOCDemo from "./components/higher-order-components/HigherOrderComponentDemo.js";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import RefDemo from "./components/content/RefDemo.js";
import PureVsImpureDemo from "./components/content/PureVsImpureComponent.js";
import NestedComponents from "./components/nestedcomponents/index.js";
import ProgramaticRouting from "./components/content/ProgramaticRouter.js";

/**
 * Main Component just returning Router 
 * @param {*} props 
 */
export const Main = function (props) {
  return (
    <Router>
      <div>
        <Header sampleText="Sample text passed as props from the APP." />
        <Navigation />
        <Switch>
          <Route path="/ref">
            <RefDemo />
          </Route>
          <Route path="/nestedcomponent" component={NestedComponents} />
          <Route path="/programaticrouting" component={ProgramaticRouting} />
          <Route path="/hoc" component={HOCDemo} />
          <Route path="/pureVsImpure" render={(props) => { return <PureVsImpureDemo customProps="hi" /> }} />
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
