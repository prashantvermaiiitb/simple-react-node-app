/**
 * CONCEPT :- How to import the component and get that appended in the DOM element.
 * this will be used in the build defined in the webpack.config.js
 */
import React from "react";
import App from "./App.js";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import PageNotFound from "./components/content/PageNotFound.js";
import HOCDemo from "./components/higher-order-components/HigherOrderComponentDemo.js";
import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer.js";
import RefDemo from "./components/content/RefDemo.js";
import PureVsImpureDemo from "./components/content/PureVsImpureComponent.js";
import RouterExamples from './components/router-functionalities';
import Navigation from './components/navigation/Navigation';

import { generateNavLinksFromConfig, generateRoutesFromConfig } from './utils/utils';
import HooksDemo from "./components/hooks/HooksDemo.js";
import CodeSplitExample from "./components/content/CodeSplitExample.js";
import Demo from "./components/content/FunctionalComponent.js";
import DangerHtml from "./components/content/DangerousHtml.js";

/**
 * Configuration information for the main navigation.
 * This will be iterated over to create the navigation.
 */
const mainNavigationConfig = [
  { path: '/', name: 'App', component: App },
  { path: '/demo', name: 'Functional Component', component: Demo },
  { path: '/danger', name: 'Danger Component', component: DangerHtml },
  { path: '/hoc', name: 'High Order Component (HOC)', component: HOCDemo },
  { path: '/ref', name: 'Ref. Usage', component: RefDemo },
  { path: '/pure-vs-impure', name: 'Pure Vs Impure Component', render: (props) => { return <PureVsImpureDemo customProps="hi" />; } },
  { path: '/router-examples', name: 'Router Usage Examples' },
  { path: '/hooks', name: 'Hooks' },
  { path: "/code-splitting", name: "Code Splitting", component: CodeSplitExample },
  { path: "/relative", name: "Using webpack for relative path" },
  { path: '/context', name: 'Context API' },
  { path: '/ssr', name: 'Server side rendering' },
]

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
          <Route path="/demo" component={Demo} />
          <Route path="/danger" component={DangerHtml} />
          <Route path="/hoc" component={HOCDemo} />
          <Route path="/hooks" component={HooksDemo}>
            {/* <Route path='/hooks'>
              <Redirect to="/hooks/users" />
            </Route>
            <Route path="/hooks/users" render={() => <h1>hello</h1>} /> */}
          </Route>
          <Route path="/pure-vs-impure" render={(props) => { return <PureVsImpureDemo customProps="hi" /> }} />
          <Route path="/router-examples" component={RouterExamples} />
          <Route path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};
