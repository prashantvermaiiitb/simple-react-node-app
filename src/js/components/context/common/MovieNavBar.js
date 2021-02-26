import React from 'react';

/**
 * Movie navigation bar to be used in the Movie component.
 * @param {*} param0 
 */
const MovieNavBar = ({ count }) => {
    return (
        <h2>Movie Count: <span>{count}</span></h2>
    );
}

export default MovieNavBar;