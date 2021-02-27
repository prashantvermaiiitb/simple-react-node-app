import React, { useContext, useRef } from 'react';
import MovieProvider, { MovieContext } from '../common/MovieContext';
import MovieList from '../common/MovieList';
import MovieNavBar from '../common/MovieNavBar';
import MovieAdd from '../common/MovieAdd';


/**
 * This has to be created because context will be accessible in the 
 * page in this and in all the child components,
 */
const PlaceholderComponent = () => {
    const [movies, setMovieList] = useContext(MovieContext);
    const movieName = useRef(null);
    const movieGenre = useRef(null);

    /**
    * Addition of the new movies.
    * @param {*} e 
    */
    const handleMovieAddition = (e) => {
        const name = movieName.current.value;
        const genre = movieGenre.current.value;
        const id = movies.length + 1;
        setMovieList([...movies, { name, genre, id }]);
    };

    // console.log(movies)
    return (
        <>
            <MovieNavBar count={movies.length} />
            <MovieAdd onMovieAddition={handleMovieAddition} ref={{ movieName, movieGenre }} />
            <MovieList movies={movies} />
        </>
    )
}

/**
 * Parent component to give the context to this
 */
const MovieAppWithContext = () => {

    return (
        <>
            <MovieProvider>
                <PlaceholderComponent />
            </MovieProvider>
        </>
    );
}

export default MovieAppWithContext;