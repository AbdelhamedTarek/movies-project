/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import StarRating from "./StarRating";

const Modal = ({
  onClose,
  selectedMovie,
  userRatings,
  setUserRatings,
  setFavoriteMovies,
  favoriteMovies,
}) => {
  // console.log(selectedMovie);
  const [hasWatched, setHasWatched] = useState(null); // Track if the user has watched the movie
  const [rating, setRating] = useState(null); // Store the rating from StarRating
  const [credits, setCredits] = useState({ director: "", cast: [] });
  const [isFavorite, setIsFavorite] = useState(false);

  // Update the state if the movie is already in favorites
  useEffect(() => {
    setIsFavorite(!!favoriteMovies[selectedMovie.id]);
  }, [selectedMovie.id, favoriteMovies]);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${selectedMovie.id}/credits?api_key=13e6d1fcf4b3b0b9f023ac7a2d283e38`
        );
        const data = await response.json();

        const director = data.crew.find(
          (member) => member.job === "Director"
        )?.name;

        const cast = data.cast.slice(0, 5).map((member) => member.name); // Get top 5 cast members

        setCredits({ director, cast });
      } catch (error) {
        console.error("Error fetching movie credits:", error);
      }
    };

    fetchCredits();

    if (userRatings[selectedMovie.id]) {
      const { watched, rating } = userRatings[selectedMovie.id];
      console.log("watched", watched, "rating", rating, name);
      setHasWatched(watched);
      setRating(rating);
    }
  }, [selectedMovie.id, userRatings]);

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
    setRating(ratingValue);
    setUserRatings((prevRatings) => ({
      ...prevRatings,
      [selectedMovie.id]: {
        watched: true,
        rating: ratingValue,
        name: selectedMovie.original_title, // Add movie name
        image: `https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`,
      },
    }));
  };

  const handleAddToFavorites = () => {
    setFavoriteMovies((prevFavorites) => ({
      ...prevFavorites,
      [selectedMovie.id]: {
        id: selectedMovie.id,
        name: selectedMovie.original_title,
        image: selectedMovie.poster_path
          ? `https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`
          : "https://via.placeholder.com/500x750",
      },
    }));
    setIsFavorite(true); // Mark as favorite
  };

  return (
    <>
      <div
        onClick={onClose} // Close modal when clicking the overlay
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-60"
      >
        <div
          onClick={(e) => e.stopPropagation()} // Prevent modal content clicks from closing the modal
          className="relative bg-white rounded-lg p-6 w-11/12 max-w-[800px] shadow-lg max-h-[90vh] overflow-y-auto"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">
            {selectedMovie.original_title}
          </h2>
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-shrink-0 w-full lg:w-1/2">
              <img
                src={
                  selectedMovie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`
                    : "https://via.placeholder.com/500x750"
                }
                alt={selectedMovie.original_title}
                className="w-full h-auto rounded-lg"
              />
            </div>
            {/* Details Section */}
            <div className="flex flex-col w-full lg:w-1/2">
              <p className="mb-4">
                <strong>Director:</strong> {credits.director || "N/A"}
              </p>
              <p className="mb-4">
                <strong>Cast:</strong> {credits.cast.join(", ") || "N/A"}
              </p>
              <p className="mb-4">
                <strong>Plot:</strong>{" "}
                {selectedMovie.overview || "No overview available."}
              </p>
              <p className="mb-4">
                <strong>Release Year:</strong>{" "}
                {new Date(selectedMovie.release_date).getFullYear() || "N/A"}
              </p>
              <p className="mb-4">
                <strong>Rating:</strong> ⭐{" "}
                {selectedMovie.vote_average || "N/A"}
              </p>

              {/* Ask if user has watched the movie */}
              {hasWatched === null ? (
                <div className="mb-4">
                  <p>Have you watched this movie?</p>
                  <button
                    onClick={() => handleWatchedChange(true)}
                    className="mr-4 mt-2 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => handleWatchedChange(false)}
                    className="mt-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                  >
                    No
                  </button>
                </div>
              ) : hasWatched && rating === null ? (
                <StarRating
                  size={28}
                  maxRating={10}
                  onSetRating={handleRating} // Properly pass the function
                />
              ) : hasWatched && rating !== null ? (
                <p className="mb-4">
                  <strong>Your Rating:</strong> ⭐ {rating}/10
                </p>
              ) : null}

              {/* Show StarRating component or message based on rating */}
            </div>
          </div>
          <div className="relative bg-white rounded-lg p-6 w-11/12 max-w-[800px] shadow-lg max-h-[90vh] overflow-y-auto">
            {/* Other modal content */}
            <button
              onClick={handleAddToFavorites}
              disabled={isFavorite} // Disable if already a favorite
              className={`mt-4 py-2 px-4 w-full rounded ${
                isFavorite
                  ? "bg-gray-500 text-white cursor-not-allowed"
                  : "bg-yellow-500 text-white hover:bg-yellow-600"
              }`}
            >
              {isFavorite ? "Added" : "Add to Favorites"}
            </button>
            <button
              onClick={onClose}
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
