import React from 'react';

/**
 * Movie addition control for the page.
 */
const MovieAdd = React.forwardRef(({ onMovieAddition }, ref) => {
    const { movieName, movieGenre } = ref;
    return (
        <div>
            <input type="text" placeholder={'enter movie name'} ref={movieName}></input>
            <input type="text" placeholder={'enter genre'} ref={movieGenre}></input>
            <button onClick={onMovieAddition}>Add Movie</button>
        </div>
    );
});
export default MovieAdd;