import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import styles from'./styles.css' 
function App() {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller.',
      posterURL: 'MOVIE-inception.jpg',
      rating: 8.8
    },
    {
      title: 'The Dark Knight',
      description: 'Batman faces off against the Joker.',
      posterURL: 'the-dark-knight.jpg',
      rating: 9.0
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const addMovie = (newMovie) => {
    setMovies((prevMovies) => {
      const updatedMovies = [...prevMovies, newMovie];
      setFilteredMovies(updatedMovies); // Update filtered movies when new movie is added
      return updatedMovies;
    });
  };

  return (
    <div>
      <h1>Movie App</h1>
      <Filter movies={movies} setFilteredMovies={setFilteredMovies} />
      <MovieList movies={filteredMovies} addMovie={addMovie} />
    </div>
  );
}

export default App;
