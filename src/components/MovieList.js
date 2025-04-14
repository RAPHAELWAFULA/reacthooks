import React, { useState } from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies, addMovie }) {
  const [newMovie, setNewMovie] = useState([
   { title: '',
    description: '',
    posterURL: '',
    rating: 0,
   }
  ]);

  const handleAddMovie = () => {
    if (newMovie.title && newMovie.rating) {
      addMovie(newMovie);
      setNewMovie({ title: '', description: '', posterURL: '', rating: 0 }); // Clear input fields after adding movie
    }
  };

  return (
    <div>
      <h2>Add New Movie</h2>
      <input
        type="text"
        placeholder="Title"
        value={newMovie.title}
        onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={newMovie.description}
        onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={newMovie.posterURL}
        onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
      />
      <input
        type="number"
        placeholder="Rating"
        value={newMovie.rating}
        onChange={(e) => setNewMovie({ ...newMovie, rating: parseFloat(e.target.value) })}
      />
      <button onClick={handleAddMovie}>Add Movie</button>

      <div>
        <h2>Movie List</h2>
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))
        ) : (
          <p>No movies to display</p>
        )}
      </div>
    </div>
  );
}

export default MovieList;
