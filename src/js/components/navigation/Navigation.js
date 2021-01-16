import React from 'react';
import { Link } from 'react-router-dom';
/**
 * Site Navigation Component
 * @todo Can this be moved to a configuration JSON and read from there ?
 */
const Navigation = () => {
    return (
        <ul>
            <li>
                <Link to="/">App</Link>
            </li>
            <li>
                <Link to="/nestedcomponent">Nested Component</Link>
            </li>
            <li>
                <Link to="/hoc">HOC</Link>
            </li>
            <li>
                <Link to="/ref">Ref. Usage</Link>
            </li>
            <li>
                <Link to="/pureVsImpure">Pure Vs Impure Component</Link>
            </li>
            <li>
                <Link to="/hooks">Hooks</Link>
            </li>
            <li>
                <Link to="/relative">Relative Path Demo</Link>
            </li>
            <li>
                <Link to="/programaticrouting">Programtic Route Demo</Link>
            </li>
        </ul>
    );
}

export default Navigation;