import React from 'react';
import { Link } from 'react-router-dom';
/**
 * Navigation for setting up the context for the Router related 
 * functionalities.
 */
export default () => {
    return (
        <React.Fragment>
            <ul>
                <li>
                    <Link to="/nestedcomponent">Nested Component</Link>
                </li>
                <li>
                    <Link to="/programaticrouting">Programtic Route Demo</Link>
                </li>
                <li>
                    <Link to="/useAuth">useAuth Demo</Link>
                </li>
                <li>
                    <Link to="/custom-link">CustomLink</Link>
                </li>
                <li>
                    <Link to="/prevent-user-link">Preventing user transition</Link>
                </li>
                <li>
                    <Link to="/no-match">No match with redirect</Link>
                </li>
                <li>
                    <Link to="/recursive-path">recursive / dynamic paths</Link>
                </li>
                <li>
                    <Link to="/route-config">route-config usage</Link>
                </li>
                <li>
                    <Link to="/route-config-2">route-config usage-2</Link>
                </li>
                <li>
                    <Link to="/transitions">Transitions</Link>
                </li>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link to="/static-router">Static router</Link>
                </li>
                <li>
                    <Link to="/query-params">Query Parameter</Link>
                </li>
                <li>
                    <Link to="/static-context">Static context</Link>
                </li>
                <li>
                    <Link to="/redirect-with-status">Redirect with status</Link>
                </li>
                <li>
                    <Link to="/match-path">Match-Path Demo</Link>
                </li>
                <li>
                    <Link to="/code-splitting">Code Splitting</Link>
                </li>
                <li>
                    <Link to="/scroll-restoration">scroll restoration</Link>
                </li>
                <li>
                    <Link to="/responsive-ui">responsive user-interfaces</Link>
                </li>
                <li>
                    <Link to="/type-of-routers">Router Types</Link>
                </li>
                <li>
                    <Link to="/type-of-links">NavLink Attribute Types</Link>
                </li>
                <li>
                    <Link to="/prompt">User prompt</Link>
                </li>
                <li>
                    <Link to="/switch-demo">Switch Usage</Link>
                </li>
                <li>
                    <Link to="/path-match">generate and match path</Link>
                </li>
                <li>
                    <Link to="/history-object">History Object</Link>
                </li>
                <li>
                    <Link to="/match-object">Match Object</Link>
                </li>
                <li>
                    <Link to="/location-object">Location Object</Link>
                </li>
                <li>
                    <Link to="/with-router">With Router usage</Link>
                </li>
                <li>
                    <Link to="/relative">Relative Path Demo</Link>
                </li>

            </ul>
        </React.Fragment>
    );
}