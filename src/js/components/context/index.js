/**
 * Should return and router/switch
 */
import React from 'react';
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import MovieApp from './without';
import MovieAppWithContext from './with';
import TodoApp from './with/TodoList';
import ContextApp from './with/MultiContext';
import { App as AllContextImpl } from './with/ContextImpl';

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
                <li><NavLink to={`${url}/with-context-2`}>with-context-2</NavLink></li>
                <li><NavLink to={`${url}/all-context`}>all-context</NavLink></li>
                <li><NavLink to={`${url}/multi-context`}>multi-context</NavLink></li>
            </ul>
            <Switch>
                <Route path={`${url}/all-context`} component={AllContextImpl} />
                <Route path={`${url}/without-context`} component={MovieApp} />
                <Route path={`${url}/with-context`} component1  ={MovieAppWithContext} />
                <Route path={`${url}/with-context-2`} component={TodoApp} />
                <Route path={`${url}/multi-context`} component={ContextApp} />
            </Switch>
        </>
    );
    // return <MovieApp />;
}

export default ContextDemo;
