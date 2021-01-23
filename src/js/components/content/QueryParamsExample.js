import React from "react";
import {
    BrowserRouter as Router,
    Link,
    useLocation,
    useRouteMatch
} from "react-router-dom";

/**
 * 1. using base URl 
 * 2. forceRefresh that will lead entire page to refresh
 * 2. wrapping all routes in Router 
 */

// React Router does not have any opinions about
// how you should parse URL query strings.
//
// If you use simple key=value query strings and
// you do not need to support IE 11, you can use
// the browser's built-in URLSearchParams API.
//
// If your query strings contain array or object
// syntax, you'll probably need to bring your own
// query parsing function.

export default function QueryParamsExample() {
    const { url } = useRouteMatch();
    // console.log('base url ', url);
    return (
        // this will make the page to refresh and hence this will reload the entire page
        // <Router basename={`${url}`} forceRefresh={true}>
        <Router basename={`${url}`}>
            <QueryParamsDemo />
        </Router>
    );
}

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function QueryParamsDemo() {
    let query = useQuery();
    const { url } = '';//useRouteMatch();

    return (
        <div>
            <div>
                <h2>Accounts</h2>
                <ul>
                    <li>
                        {/* We need path here as the name=/router-examples/zillow-group  will be picked up as the default path.*/}
                        <Link to={`/account?name=netflix`}>Netflix</Link>
                    </li>
                    <li>
                        <Link to={`/account?name=zillow-group`}>Zillow Group</Link>
                    </li>
                    <li>
                        <Link to={`/account?name=yahoo`}>Yahoo</Link>
                    </li>
                    <li>
                        <Link to={`/account?name=modus-create`}>Modus Create</Link>
                    </li>
                </ul>

                <Child name={query.get("name")} />
            </div>
        </div>
    );
}

function Child({ name }) {
    return (
        <div>
            {name ? (
                <h3>
                    The <code>name</code> in the query string is &quot;{name}
          &quot;
                </h3>
            ) : (
                    <h3>There is no name in the query string</h3>
                )}
        </div>
    );
}
