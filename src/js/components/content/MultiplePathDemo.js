import React from 'react';
import { BrowserRouter as Router, Route, NavLink, useRouteMatch, useParams } from 'react-router-dom'

/**
 * constant Id will be printed 
 * @param {*} props 
 */
const User = (props) => {
    const { id } = useParams();
    return (
        <div>
            <h1>Hello from the User.{id}</h1>
        </div>
    );
}

/**
 * Show the loading of the same component on multiple paths
 */
const MultiplePathDemo = () => {
    const { url } = useRouteMatch();
    return (
        <Router basename={url}>
            <ul>
                <li><NavLink to={"/users/1"}>User-1</NavLink></li>
                <li><NavLink to={"/profile/1000"}>User-Profile-1</NavLink></li>
            </ul>
            <Route path={['/users/:id', '/profile/:id']}>
                <User />
            </Route>
        </Router>
    );
}

export default MultiplePathDemo;