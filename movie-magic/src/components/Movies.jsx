/* eslint-disable react/prop-types */

// import { useState } from "react";
import MovieCard from "./MovieCard";
import Modal from "./Modal";

const Movies = ({
  searchResults,
  selectedMovie,
  onCardClick,
  onClose,
  userRatings,
  setUserRatings,
  setFavoriteMovies,
  favoriteMovies,
}) => {
  console.log(searchResults);
  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {searchResults &&
          searchResults.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onCardClick={onCardClick} />
          ))}
      </div>
      <div>
        {selectedMovie ? (
          <Modal
            onClose={onClose}
            selectedMovie={selectedMovie}
            userRatings={userRatings}
            setUserRatings={setUserRatings}
            setFavoriteMovies={setFavoriteMovies}
            favoriteMovies={favoriteMovies}
          />
        ) : null}
      </div>
    </>
  );
};

export default Movies;
