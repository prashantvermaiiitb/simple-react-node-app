/**
 * Example for showing the usage of the matchPath function
 * This will be used outside react-router as well but here we are using Route at 
 * the parent level so need those for the Demo purpose.
 */
import React from 'react';
import { Route, matchPath, useRouteMatch } from 'react-router-dom';


const MatchPathExample = () => {
    const { url } = useRouteMatch();
    const pathArray = ["/users/:id", '/users/profiles/1', '/users/demo/3'];
    const match1 = matchPath("/users/resume/123", {
        path: pathArray,
        exact: true,
        strict: false
    });
    const match2 = matchPath("/users/123", {
        path: pathArray,
        exact: true,
        strict: false
    });
    let divStyle = {
        padding: 10,
        border: '1px dotted grey'
    };
    return (
        <Route basename={url}>
            <div>
                <div style={divStyle}>Result of the First match:{JSON.stringify(match1)}</div>
                <br />
                <div style={divStyle}>Result of the Second match:{JSON.stringify(match2)}</div>
            </div>
        </Route>

    );
}

export default MatchPathExample;