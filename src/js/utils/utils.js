import React from 'react';
import { Link, Route } from 'react-router-dom';
import routerFunctionalities from '../components/router-functionalities';
/**
 * Utility to generate the Navigation from the JSON config array.
 * @param {*} config 
 * @param {*} listStyle 
 * @param {*} baseUrl 
 */
export const generateNavLinksFromConfig = ({ config, listStyle, baseUrl = '' }) => {
    return (
        <ul style={listStyle || { listStyle: 'decimal' }}>
            {config.map((route, index) => <li style={{ margin: 5 }} key={index}><Link to={`${baseUrl}${route.path}`}>{route.name}</Link></li>)}
        </ul>
    );
}
/**
 * Method to generate the Routes from the JSON config.
 * This can be same that has been used for generating the navigation for the page.
 * @param {*} config 
 */
export const generateRoutesFromConfig = ({ config, baseUrl }) => {
    return config.map(function (route, index) {
        if (route.component) {
            // console.log(`${baseUrl}${route.path}`);
            return <Route key={index} path={`${baseUrl}${route.path}`} component={route.component} />
        } else if (route.render && typeof route.render === 'function') {
            return <Route key={index} path={`${baseUrl}${route.path}`} render={route.render} />
        } else if (route.children && typeof route.children === 'function') {
            return <Route key={index} path={`${baseUrl}${route.path}`} children={route.children} />

        }
        return null;
    });
}

export const sleep = function (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}