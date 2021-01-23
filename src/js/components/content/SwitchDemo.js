import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import ScrollToTop from './ScrollToTop';

/**
 * Here we are making the switch to match to a custom path 
 * rather than the one that's being passed.
 */
const SwitchDemo = () => {
    return (
        <>
            <ScrollToTop />
            <Switch location={{ pathname: '/hello/1' }}>
                <Route path={'/hello/:id'} component={(props) => <h2 style={{ fontFamily: 'monospace', 'fontSize': '14' }}>Hello shown based on the custom location match with params {props.match.params.id}</h2>} />
            </Switch>
        </>
    );
}

export default SwitchDemo;