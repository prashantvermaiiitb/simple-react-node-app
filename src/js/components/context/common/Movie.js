import React from 'react';
/**
 * Movie Component to be used in the with and without context examples.
 * @param {*} param0 
 */
const Movie = ({ data }) => {
    const { id, name, genre } = data;
    return (
        <div style={{ padding: 5, margin: 5 }}>
            <div>Name: <span>{name}</span></div>
            <div>Genre: <span>{genre}</span></div>
        </div>
    );
}

export default Movie;