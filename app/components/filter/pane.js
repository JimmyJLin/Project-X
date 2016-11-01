
import React from 'react';

function Pane({
  selectedYear,
  selectedGenre,
  selectedRating,
  years = [],
  genres = [],
  ratings = [],
  sorting,
  onYearChange,
  onGenreChange,
  onRatingChange,
  onSortingChange,
}) {
  return (
    <div>
      <div>
        Filters:
        <div>
          Year:
          <select
            defaultValue={selectedYear}
            onChange={e => onYearChange(e.target.value)}
          >
            <option value="all" >All</option>
            {years.map((y, i) =>
              <option key={i} value={y}>{y}</option>
            )}
          </select>
        </div>
        <div>
          Genre:
          <select
            defaultValue={selectedGenre}
            onChange={e => onGenreChange(e.target.value)}
          >
            <option value="all" >All</option>
            {genres.map((g, i) =>
              <option key={i} value={g}>{g}</option>
            )}
          </select>
        </div>
        <div>
          Rating:
          <select
            defaultValue={selectedRating}
            onChange={e => onRatingChange(e.target.value)}
          >
            <option value="all" >All</option>
            {ratings.map((r, i) =>
              <option key={i} value={r}>{r}</option>
            )}
          </select>
        </div>
      </div>
      <div>
        Select sorting:
        <select
          defaultValue={sorting}
          onChange={e => onSortingChange(e.target.value)}
        >
          <option value="alphabetically">Alphabetically</option>
          <option value="year">Year</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
  );
}

export default Pane;
