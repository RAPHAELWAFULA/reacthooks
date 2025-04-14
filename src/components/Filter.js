import React, { useState } from 'react';

function Filter({ movies, setFilteredMovies }) {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleFilter = () => {
    const filtered = movies.filter((movie) => {
      return (
        (title ? movie.title.toLowerCase().includes(title.toLowerCase()) : true) &&
        (rating ? movie.rating >= parseFloat(rating) : true)
      );
    });
    setFilteredMovies(filtered);
  };

  return (
    <div>
      <h2>Filter Movies</h2>
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button onClick={handleFilter}>Apply Filter</button>
    </div>
  );
}

export default Filter;
