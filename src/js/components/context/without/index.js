import React, { useState, useRef } from 'react';
import MovieList from '../common/MovieList';
import MovieNavBar from '../common/MovieNavBar';
import MovieAdd from '../common/MovieAdd';

const movieList = [
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
    const [movies, setMovies] = useState(movieList);
    const movieName = useRef(null);
    const movieGenre = useRef(null);

    /**
     * Updating the movie update
     * @param {*} movie 
     */
    const handleMovieUpdate = (movie) => {
        setMovies([...movies, movie])
    }

    /**
     * Addition of the new movies.
     * @param {*} e 
     */
    const handleMovieAddition = (e) => {
        const name = movieName.current.value;
        const genre = movieGenre.current.value;
        const id = movies.length + 1;
        setMovies([...movies, { name, genre, id }]);
    }
    return (
        <>
            <MovieNavBar count={movies.length} />
            <MovieAdd onMovieAddition={handleMovieAddition} ref={{ movieName, movieGenre }} />
            <MovieList movies={movies} onMovieUpdate={handleMovieUpdate} />
        </>
    );
}

export default MovieApp;