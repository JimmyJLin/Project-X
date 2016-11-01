import React from 'react';

function Movies({ movies }){
  return(
    <ul>
      {movies.map((m, i ) =>
        <li key={i}> {m.year} - {m.title}.({m.genre}) - {m.rating} </li>
      )}
    </ul>
  )
}

export default Movies;
