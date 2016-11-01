
import { connect } from 'react-redux';
import Movies from './Movies';

// Getting visible movies from state.
function getVisibleMovies(year, genre, rating, sorting, movies) {
  return movies
    .filter(m => {
      return (
        (year == 'all' || year == m.year) &&
        (genre == 'all' || genre == m.genre) &&
        (rating == 'all' || rating == m.rating)
      );
    })
    .sort((a, b) => {
      if (sorting == 'year') {
        return b.year - a.year;
      }
      if (sorting == 'rating') {
        return b.rating - a.rating;
      }
      if (sorting == 'alphabetically') {
        return a.title > b.title ? 1 : a.title < b.title ? -1 : 0;
      }
    });
}

function mapStateToProps(state) {
  const { year, genre, rating, sorting, movies } = state;
  return {
    movies: getVisibleMovies(year, genre, rating, sorting, movies),
  };
}

export default connect(mapStateToProps)(Movies);
