import React from 'react';
import Movie from './Movie';

/**
 * Movie List Component.
 * @param {*} param0 
 */
const MovieList = ({ movies, onMovieUpdate }) => {
    return (
        <>
            {movies.map(movie => <Movie key={movie.id} data={movie} />)}
        </>
    );
}

export default MovieList;