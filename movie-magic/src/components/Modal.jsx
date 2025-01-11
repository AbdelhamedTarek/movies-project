/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import useMovieStore from "../store";

const Modal = () => {
  const {
    selectedMovie,
    favoriteMovies,
    setError,
    setSelectedMovie,
    userRatings,
    setUserRatings,
    setFavoriteMovies,
  } = useMovieStore();
  const [hasWatched, setHasWatched] = useState(null);
  const [rating, setRating] = useState(null);
  const [credits, setCredits] = useState({ director: "", cast: [] });
  const [isFavorite, setIsFavorite] = useState(false);

  const handleCloseModal = () => setSelectedMovie(null);

  useEffect(() => {
    setIsFavorite(!!favoriteMovies[selectedMovie.id]);
  }, [selectedMovie.id, favoriteMovies]);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${
            selectedMovie.id
          }/credits?api_key=${import.meta.env.VITE_API_KEY}`
        );
        const data = await response.json();
        const director = data.crew.find(
          (member) => member.job === "Director"
        )?.name;
        const cast = data.cast.slice(0, 5).map((member) => member.name);

        setCredits({ director, cast });
      } catch (err) {
        setError("Failed to fetch top-rated movies. Please try again.");
      }
    };

    fetchCredits();

    if (userRatings[selectedMovie.id]) {
      const { watched, rating } = userRatings[selectedMovie.id];
      setHasWatched(watched);
      setRating(rating);
    }
  }, [selectedMovie, setError, userRatings]);

  const handleWatchedChange = (response) => {
    setHasWatched(response);
    if (!response) {
      setUserRatings((prevRatings) => ({
        ...prevRatings,
        [selectedMovie.id]: { watched: false, rating: null },
      }));
    }
  };

  const handleRating = (ratingValue) => {
    if (!selectedMovie || !selectedMovie.id) {
      console.error("Invalid movie data for rating:", selectedMovie);
      return;
    }

    setRating(ratingValue);
    setUserRatings((prevRatings) => ({
      ...prevRatings,
      [selectedMovie.id]: {
        watched: true,
        rating: ratingValue,
        name: selectedMovie.original_title || "Unknown Title",
        image: selectedMovie.poster_path
          ? `https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`
          : "https://via.placeholder.com/500x750",
      },
    }));
  };

  const handleAddToFavorites = () => {
    if (!selectedMovie || !selectedMovie.id) {
      console.error("Invalid movie data:", selectedMovie);
      return;
    }

    setFavoriteMovies((prevFavorites) => ({
      ...prevFavorites,
      [selectedMovie.id]: {
        id: selectedMovie.id,
        name: selectedMovie.original_title || "Unknown Title",
        image: selectedMovie.poster_path
          ? `https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`
          : "https://via.placeholder.com/500x750",
      },
    }));
    setIsFavorite(true);
  };

  return (
    <div
      onClick={handleCloseModal}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-60"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white text-gray-800 rounded-lg p-6 w-full max-w-sm sm:max-w-md lg:max-w-3xl mx-auto shadow-lg overflow-y-auto max-h-screen"
      >
        <h2 className="text-3xl font-bold text-center mb-4 text-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          {selectedMovie.original_title}
        </h2>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Movie Poster */}
          <div className="flex-shrink-0 w-full lg:w-1/3">
            <img
              src={
                selectedMovie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`
                  : "https://via.placeholder.com/500x750"
              }
              alt={selectedMovie.original_title}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Movie Details */}
          <div className="flex flex-col w-full lg:w-2/3">
            <p className="mb-3">
              <strong>Director:</strong> {credits.director || "N/A"}
            </p>
            <p className="mb-3">
              <strong>Cast:</strong> {credits.cast.join(", ") || "N/A"}
            </p>
            <p className="mb-3">
              <strong>Plot:</strong>{" "}
              {selectedMovie.overview || "No overview available."}
            </p>
            <p className="mb-3">
              <strong>Release Year:</strong>{" "}
              {new Date(selectedMovie.release_date).getFullYear() || "N/A"}
            </p>
            <p className="mb-3">
              <strong>Rating:</strong> ⭐ {selectedMovie.vote_average || "N/A"}
            </p>

            {/* Watched and Rating Section */}
            {hasWatched === null ? (
              <div className="mb-4">
                <p>Have you watched this movie?</p>
                <div className="mt-2 flex gap-4">
                  <button
                    onClick={() => handleWatchedChange(true)}
                    className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => handleWatchedChange(false)}
                    className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600"
                  >
                    No
                  </button>
                </div>
              </div>
            ) : hasWatched && rating === null ? (
              <StarRating size={28} maxRating={10} onSetRating={handleRating} />
            ) : hasWatched && rating !== null ? (
              <p className="mb-4">
                <strong>Your Rating:</strong> ⭐ {rating}/10
              </p>
            ) : null}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col gap-4">
          <button
            onClick={handleAddToFavorites}
            disabled={isFavorite}
            className={`py-2 px-6 w-full rounded-lg ${
              isFavorite
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-yellow-500 hover:bg-yellow-600"
            }`}
          >
            {isFavorite ? "Added to Favorites" : "Add to Favorites"}
          </button>
          <button
            onClick={handleCloseModal}
            className="py-2 px-6 w-full rounded-lg bg-blue-500 text-white hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
