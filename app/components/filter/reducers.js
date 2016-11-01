
const items = [{
  title: 'Mad max',
  year: 2015,
  rating: 8,
  genre: 'fantasy',
}, {
  title: 'Spider man 2',
  year: 2014,
  rating: 7,
  genre: 'fantasy',
}, {
  title: 'Iron man 3',
  year: 2013,
  rating: 7,
  genre: 'fantasy',
}, {
  title: 'Dumb and Dumber To',
  year: 2014,
  rating: 5,
  genre: 'comedy',
}, {
  title: 'Ted 2',
  year: 2015,
  rating: 6,
  genre: 'comedy',
}];

export default function moviesReducer(state = {
  movies: items,
  year: 'all',
  rating: 'all',
  genre: 'all',
  sorting: 'year',
}, action) {
  switch (action.type) {
    case 'SET_YEAR':
      return {
        ...state,
        year: action.year,
      };
    case 'SET_RATING':
      return {
        ...state,
        rating: action.rating,
      };
    case 'SET_GENRE':
      return {
        ...state,
        genre: action.genre,
      };
    case 'SET_SORTING':
      return {
        ...state,
        sorting: action.sorting,
      };
    default:
      return state;
  }
}
