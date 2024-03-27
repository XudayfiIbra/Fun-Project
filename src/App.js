import React, { useState, useEffect } from 'react';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/movies_api');
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Movies List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={`http://127.0.0.1:8000${movie.Poster}`} alt={movie.Title} className="w-full h-64 object-cover" />

            <div className="p-4">
              <h2 className="text-lg font-bold">{movie.Title}</h2>
              <p>Type: {movie.Type}</p>
              <p>Year: {movie.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
