/**
 * Should return and router/switch
 */
import React from 'react';
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import MovieApp from './without';
import MovieAppWithContext from './with';

/**
 * @todo can we put a redirect for the index route here
 */
const ContextDemo = () => {
    const { url } = useRouteMatch();
    console.log('url present in the router...', url);
    return (
        <>
            <ul>
                <li><NavLink to={`${url}/without-context`}>without-context</NavLink></li>
                <li><NavLink to={`${url}/with-context`}>with-context</NavLink></li>
            </ul>
            <Switch>
                <Route path={`${url}/without-context`} component={MovieApp} />
                <Route path={`${url}/with-context`} component={MovieAppWithContext} />
            </Switch>
        </>
    );
    // return <MovieApp />;
}

export default ContextDemo;
