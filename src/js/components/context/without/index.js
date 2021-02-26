import React from 'react';
import MovieList from '../common/MovieList';
import MovieNavBar from '../common/MovieNavBar';

const movies = [
    {
        id: 1,
        name: 'Avatar',
        genre: 'Action',
    },
    {
        id: 2,
        name: 'good will hunting',
        genre: 'Romance',
    },
    {
        id: 3,
        name: 'transporter',
        genre: 'thriller',
    }
];

/**
 * Movie APP which is not using context
 * See how the props are getting passed.
 */
const MovieApp = () => {
    return (
        <>
            <MovieNavBar count={movies.length} />
            <MovieList movies={movies} />
        </>
    );
}

export default MovieApp;