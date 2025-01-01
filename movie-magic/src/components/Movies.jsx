/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const Movies = ({ search }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=4075d940&s=${search}&type=movie`
      );
      const data = await res.json();
      setMovies(data.Search);
    };
    fetchMovies();
  }, [search, setMovies]);

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-blue-700 text-3xl mt-4">Search Results</h1>
      <div className="container mx-auto flex flex-wrap justify-center items-center flex-row">
        {movies &&
          movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)}
      </div>
    </div>
  );
};

export default Movies;
