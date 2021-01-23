/**
 * declaring the route as the JSON and using that to generate the components 
 * and the UI.
 * @todo evaluate the usage in the Feed Engine.
 */
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { generateNavLinksFromConfig } from '../../utils/utils';

function Bus() {
    return <h3>Bus</h3>;
}

function Cart() {
    return <h3>Cart</h3>;
}

function Sandwiches() {
    return <h2>Sandwiches</h2>;
}

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
const routes = [
    {
        path: "/sandwiches",
        component: Sandwiches
    },
    {
        path: "/tacos",
        component: Tacos,
        routes: [
            {
                path: "/tacos/bus",
                component: Bus
            },
            {
                path: "/tacos/cart",
                component: Cart
            }
        ]
    }
];

function Tacos({ routes }) {
    // const { url } = useRouteMatch();
    const url = '';
    return (
        <div>
            <h2>Tacos</h2>
            {/* {generateNavLinksFromConfig({ config: routes, baseUrl: url })} */}
            <ul>
                <li>
                    <Link to={`${url}/tacos/bus`}>Bus</Link>
                </li>
                <li>
                    <Link to={`${url}/tacos/cart`}>Cart</Link>
                </li>
            </ul>

            <Switch>
                {routes.map((route, i) => {
                    {/* console.log('before', route.path); */ }
                    route.path = `${url}${route.path}`;
                    console.log('route information in Tacos ', route.path);
                    return <RouteWithSubRoutes key={i} {...route} />
                })}
            </Switch>
        </div>
    );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
    // const { url } = useRouteMatch();
    console.log(`Route with in `, route);
    return (
        <Route
            // path={`${url}${route.path}`}
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}
/**
 * Example for getting the route from the JSON config.
 */
export default function RouteConfigExample() {
    // const { url } = useRouteMatch();
    const url = '';
    console.log('url in RouteConfigExample', url);
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to={`${url}/tacos`}>Tacos</Link>
                    </li>
                    <li>
                        <Link to={`${url}/sandwiches`}>Sandwiches</Link>
                    </li>
                </ul>

                <Switch>
                    {routes.map((route, i) => {
                        route.path = `${url}${route.path}`;
                        console.log('route.path in route-config-example', route.path);
                        return <RouteWithSubRoutes key={i} {...route} />
                    })}
                </Switch>
            </div>
        </Router>
    );
}