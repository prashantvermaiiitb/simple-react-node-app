import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Home from './Home';

/**
 * Nested component Demo for the page. 
 * @todo indexroute / indexlink - implementation
 */
const NestedComponents = () => {
    return (
        <Router>
            <div>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </div>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route exact path="/home">
                <Home />
            </Route>
        </Router>
    );
}

export default NestedComponents;