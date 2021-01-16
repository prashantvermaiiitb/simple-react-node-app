import React from 'react';
import { BrowserRouter as Router, Route, Link, useRouteMatch } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Home from './Home';
import Topics from './Topics';

/**
 * Nested component Demo for the page. 
 * @todo indexroute / indexlink - implementation ?
 */
const NestedComponents = () => {
    const match = useRouteMatch();
    const routes = [
        { name: 'Home', path: 'home', component: Home },
        { name: 'About', path: 'about', component: About },
        { name: 'Contact', path: 'contact', component: Contact },
        //@todo handling for this has to be written ?? 
        { name: 'Named Component', path: 'namedcomponent' },
        { name: 'Topics With Sub-Routes', path: 'topics', component: Topics }
    ]
    return (
        <Router>
            <ul>
                {routes.map((route, index) => {
                    return (
                        <li key={index}><Link to={`${match.url}/${route.path}`}>{route.name}</Link></li>
                    );
                })}
            </ul>
            {/* Here we have removed the handling of the Inner HTML. */}
            {routes.filter((route, index) => typeof route.component !== 'undefined').map((route, index) => {
                return (
                    <Route key={index} path={`${match.url}/${route.path}`} component={route.component}></Route>
                );
            })}
            {/* <Route path="/nestedcomponent/about">
                <About />
            </Route>
            <Route path="/nestedcomponent/contact">
                <Contact />
            </Route>
            <Route path="/nestedcomponent/topics">
                <Topics />
            </Route>
            <Route exact path="/nestedcomponent/home">
                <Home />
            </Route> */}
        </Router>
    );
}

export default NestedComponents;