/**
 * CONCEPT :- How to import the component and get that appended in the DOM element.
 * this will be used in the build defined in the webpack.config.js
 */
import React from "react";
import App from "./App.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PageNotFound from "./components/content/PageNotFound.js";
import HOCDemo from "./components/higher-order-components/HigherOrderComponentDemo.js";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import RefDemo from "./components/content/RefDemo.js";
import PureVsImpureDemo from "./components/content/PureVsImpureComponent.js";
import RouterExamples from "./components/router-functionalities";
import Navigation from "./components/navigation/Navigation";

import {
  generateNavLinksFromConfig,
  generateRoutesFromConfig,
} from "./utils/utils";
import HooksDemo from "./components/hooks/HooksDemo.js";
import CodeSplitExample from "./components/content/CodeSplitExample.js";
import Demo from "./components/content/FunctionalComponent.js";
import DangerHtml from "./components/content/DangerousHtml.js";
import WindowDimensions from "./components/content/Orientation.js";
import NoHtmlDemo from "./components/content/NoHtml.js";
import ContextDemo from "./components/context/index.js";
import MemoDemo from "./components/memo/index.js";
import LazyLoadDemo from "./components/lazy/index.js";
import Person from "./components/decorator/Person";

/**
 * Configuration information for the main navigation.
 * This will be iterated over to create the navigation.
 */
const mainNavigationConfig = [
  { path: "/", name: "App", component: App },
  { path: "/deco-demo", name: "Decorator Demo", component: Person },
  { path: "/memo-demo", name: "Memo Demo", component: MemoDemo },
  { path: "/lazy-demo", name: "LazyLoad Demo", component: LazyLoadDemo },
  { path: "/demo", name: "Functional Component", component: Demo },
  { path: "/context", name: "Context API", component: ContextDemo },
  {
    path: "/orientation",
    name: "Orientation Checker",
    component: WindowDimensions,
  },
  {
    path: "/without-render",
    name: "react without render",
    component: NoHtmlDemo,
  },
  { path: "/danger", name: "Danger Component", component: DangerHtml },
  { path: "/hoc", name: "High Order Component (HOC)", component: HOCDemo },
  { path: "/ref", name: "Ref. Usage", component: RefDemo },
  {
    path: "/pure-vs-impure",
    name: "Pure Vs Impure Component",
    render: (props) => {
      return <PureVsImpureDemo customProps="hi" />;
    },
  },
  { path: "/router-examples", name: "Router Usage Examples" },
  { path: "/hooks", name: "Hooks" },
  {
    path: "/code-splitting",
    name: "Code Splitting",
    component: CodeSplitExample,
  },
  { path: "/relative", name: "Using webpack for relative path" },
  { path: "/ssr", name: "Server side rendering" },
  { path: "/decorator", name: "Decorator Component" },
  { path: "/memo", name: "Memoize Component" },
  { path: "/scroll-height", name: "Scroll height restoration Component" },
  { path: "/set-state-callback", name: "set state callback" },
  { path: "/prop-types", name: "PropTypes demo Shape" },
];

/**
 * Main Component just returning Router
 * @param {*} props
 */
export const Main = function (props) {
  /* @todo : using the configuration and generating the routes is needed now. */
  return (
    <Router>
      <div>
        <Header sampleText="Sample text passed as props from the APP." />
        <Navigation config={mainNavigationConfig} />
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/ref">
            <RefDemo />
          </Route>
          <Route path="/deco-demo" component={Person} />
          <Route path="/memo-demo" component={MemoDemo} />
          <Route path="/lazy-demo" component={LazyLoadDemo} />
          <Route path="/demo" component={Demo} />
          <Route path="/context" component={ContextDemo} />
          <Route path="/danger" component={DangerHtml} />
          <Route path="/orientation" component={WindowDimensions} />
          <Route path="/without-render" component={NoHtmlDemo} />
          <Route path="/hoc" component={HOCDemo} />
          <Route path="/hooks" component={HooksDemo}>
            {/* <Route path='/hooks'>
              <Redirect to="/hooks/users" />
            </Route>
            <Route path="/hooks/users" render={() => <h1>hello</h1>} /> */}
          </Route>
          <Route
            path="/pure-vs-impure"
            render={(props) => {
              return <PureVsImpureDemo customProps="hi" />;
            }}
          />
          <Route path="/router-examples" component={RouterExamples} />
          <Route path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};
