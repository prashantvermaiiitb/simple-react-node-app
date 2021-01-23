import React from 'react';
import { BrowserRouter as Router, Route, NavLink, useRouteMatch, useParams } from 'react-router-dom'
import ScrollToTop from './ScrollToTop';

/**
 * Passing Object in TO attribute Example.
 * Here important point to note is we are not getting 'params' in the props.match
 * so we have to use the location object and use the URLSearchParams().
 */
const ToObjectExample = () => {
    const { url } = useRouteMatch();
    return (
        <Router basename={url}>
            <>
                <ScrollToTop />
                <ul>
                    <li><NavLink to={
                        { pathname: '/hello', search: '?name=hello', hash: 'hello' }
                    }>Passing Object in 'TO'</NavLink></li>
                </ul>
                <Route path={`/hello`} component={(props) => <h1>hello from the to Object..<br />Hash In Url.{props.location.hash}, <br /> Name params : {new URLSearchParams(props.location.search).get('name')}</h1>} />
            </>
        </Router>
    );
}

export default ToObjectExample;