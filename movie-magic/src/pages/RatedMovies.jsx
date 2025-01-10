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
    <div className="mt-12 px-4 sm:px-8 lg:px-16">
      {searchResults.length > 0 && (
        <>
          <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
            Search Results
          </h2>
          <div className="flex flex-wrap justify-center gap-8 p-6">
            <Movies />
          </div>
        </>
      )}

      <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
        Rated Movies
      </h2>

      {ratedMovies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {ratedMovies.map(([movieId, data]) => (
            <div
              key={movieId}
              className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300 hover:shadow-2xl"
            >
              {/* Image container */}
              <div className="relative w-full h-48 bg-gray-100">
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6">
                <p className="text-lg font-semibold text-gray-900 mb-2 truncate">
                  {data.name}
                </p>
                <p className="text-sm text-gray-700 mb-4">
                  <strong>Rating:</strong> ⭐ {data.rating}/10
                </p>
                <button
                  onClick={() => handleDelete(movieId)}
                  className="w-full py-2 px-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium rounded-full hover:from-red-600 hover:to-red-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-red-300"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-500 mt-8">
          No movies rated yet.
        </p>
      )}
    </div>
  );
};

export default RatedMovies;
