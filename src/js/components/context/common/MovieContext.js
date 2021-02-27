import React, { createContext, useState } from 'react';
import { MOVIE_DATA } from './constants';

/**
 * where we need to use this context we are going to 
 * import this movie context.
 */
export const MovieContext = createContext();

/**
 * Component for providing the data for the Movie List.
 * this will be used so that props drill down will not be used.
 * 1) State is being moved here.
 * 2) Setter is also being moved here. 
 * 3) Context is being connected to provider as well.
 * 4) 'value' is the name of the attribute that should be used. 
 * 5) useContext() to be used where we need the context to be used. 
 * 6) Provider to be used as the Wrapper parent component overall.
 * 7) 
 */
const MovieProvider = (props) => {
    const [movieList, setMovieList] = useState(MOVIE_DATA);

    /**
     * value is being needed here else will not be to access the context. 
     */
    return (
        <MovieContext.Provider value={[movieList, setMovieList]}>
            {props.children}
        </MovieContext.Provider>
    );
}

export default MovieProvider;