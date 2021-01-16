import React from 'react';
import { Link } from 'react-router-dom';
import './content.css';
/**
 * Page not found component for the project.
 */
const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <span >Sorry Current Route is not supported !!</span>
            <br />
            <span style={{ fontSize: 14 }}>(Probably implementation needed in Webpack config or SSR for server side link access.)</span>
            <br />
            <br />
            <br />
            <Link to='/'>Go Back</Link>
        </div>
    );
}

export default PageNotFound;