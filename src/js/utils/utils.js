import React from 'react';
import { Link, Route } from 'react-router-dom';
import routerFunctionalities from '../components/router-functionalities';
/**
 * Utility to generate the Navigation from the JSON config array.
 * @param {*} jsonConfigArray 
 */
export const generateNavLinksFromConfig = (jsonConfigArray) => {
    return jsonConfigArray.map((route, index) => <li key={index}><Link to={route.path}>{route.name}</Link></li>);
}
/**
 * Method to generate the Routes from the JSON config.
 * This can be same that has been used for generating the navigation for the page.
 * @param {*} jsonConfigArray 
 */
export const generateRoutesFromConfig = (jsonConfigArray) => {
    console.log(jsonConfigArray.filter((route) => route.component || route.render || route.children).map((route, index) => <Route key={index} {...route}></Route>));

    return jsonConfigArray.filter((route) => route.component).map((route, index) => <Route key={index} component={route.component}></Route>);
}

export const sleep = function (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}