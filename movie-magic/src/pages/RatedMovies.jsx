/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import useMovieStore from "../store";
import Movies from "../components/Movies";

const RatedMovies = () => {
  const { userRatings, setUserRatings, searchResults } = useMovieStore();
  const ratedMovies = Object.entries(userRatings).filter(
    ([_, data]) => data.rating !== null
  );

  const handleDelete = (movieId) => {
    setUserRatings((prevRatings) => {
      const updatedRatings = { ...prevRatings }; // Create a copy of the existing ratings
      delete updatedRatings[movieId]; // Remove the movie from the ratings
      return updatedRatings; // Return the updated object
    });
  };

  useEffect(() => {
    localStorage.setItem("userRatings", JSON.stringify(userRatings));
  }, [userRatings]);

  return (
    <div className="mt-8 px-4 sm:px-8 lg:px-16">
      {searchResults.length > 0 && (
        <>
          <h2 className="text-3xl font-bold text-center mb-8 text-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Search Results
          </h2>
          <div className="flex flex-wrap justify-center gap-6 p-4">
            <Movies />
          </div>
        </>
      )}

      <h2 className="text-3xl font-bold text-center mb-8 text-gradient bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
        Rated Movies
      </h2>

      {ratedMovies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ratedMovies.map(([movieId, data]) => (
            <div
              key={movieId}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300"
            >
              {/* Image container */}
              <div className="relative w-full h-48">
                <img
                  src={data.image}
                  alt={data.name}
                  className="absolute inset-0 w-full h-full object-contain rounded-t-lg"
                />
              </div>

              <div className="p-4">
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  {data.name}
                </p>
                <p className="text-base text-gray-600 mb-2">
                  <strong>Rating:</strong> ⭐ {data.rating}/10
                </p>
                <button
                  onClick={() => handleDelete(movieId)}
                  className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-300 mt-4 w-full"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-500 mt-4">
          No movies rated yet.
        </p>
      )}
    </div>
  );
};

export default RatedMovies;
