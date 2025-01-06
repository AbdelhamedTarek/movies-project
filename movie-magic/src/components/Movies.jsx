/* eslint-disable react/prop-types */

import { useState } from "react";
import MovieCard from "./MovieCard";
import Modal from "./Modal";

const Movies = ({ searchResults }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleCardClick = (movie) => {
    setSelectedMovie(movie); // Set the selected movie details
  };

  const handleCloseModal = () => {
    setSelectedMovie(null); // Close the modal
  };
  console.log(searchResults);
  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {searchResults &&
          searchResults.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onCardClick={handleCardClick}
            />
          ))}
      </div>
      <div>
        {selectedMovie ? (
          <Modal onClose={handleCloseModal} selectedMovie={selectedMovie} />
        ) : null}
      </div>
    </>
  );
};

export default Movies;
