
import { connect } from 'react-redux';
import Pane from './Pane';

// Simple helper function, which return all filters from state by given key.
function getFilters(key, movies) {
  return movies.reduce((acc, movie) => {
    if (!acc.includes(movie[key])) {
      return [...acc, movie[key]];
    }
    return acc;
  }, []);
}

function mapStateToProps(state, props) {
  const { sorting, year, genre, rating } = state;
  return {
    selectedYear: year,
    selectedGenre: genre,
    selectedRating: rating,
    years: getFilters('year', state.movies),
    genres: getFilters('genre', state.movies),
    ratings: getFilters('rating', state.movies),
    sorting,
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    // Here, we are providing callbacks with dispatching functions.
    onYearChange(year) {
      dispatch({
        type: 'SET_YEAR',
        year,
      });
    },
    onGenreChange(genre) {
      dispatch({
        type: 'SET_GENRE',
        genre,
      });
    },
    onRatingChange(rating) {
      dispatch({
        type: 'SET_RATING',
        rating,
      });
    },
    onSortingChange(sorting) {
      dispatch({
        type: 'SET_SORTING',
        sorting,
      });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pane);
