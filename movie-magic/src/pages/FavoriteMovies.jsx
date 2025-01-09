import { useEffect } from "react";
import useMovieStore from "../store";
import Movies from "../components/Movies";

const FavoriteMovies = () => {
  const { favoriteMovies, setFavoriteMovies, searchResults } = useMovieStore();
  const handleRemoveFromFavorites = (movieId) => {
    setFavoriteMovies((prevFavorites) => {
      const updatedFavorites = { ...prevFavorites };
      delete updatedFavorites[movieId];
      return updatedFavorites;
    });
  };

  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

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
        Your Favorite Movies
      </h2>

      {Object.keys(favoriteMovies).length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {Object.entries(favoriteMovies).map(([movieId, movie]) => (
            <div
              key={movieId}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300"
            >
              {/* Image container with smaller aspect ratio */}
              <div className="relative w-full pb-[120%]">
                <img
                  src={movie.image}
                  alt={movie.name}
                  className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                />
              </div>

              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {movie.name}
                </h3>
                <button
                  onClick={() => handleRemoveFromFavorites(movieId)}
                  className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-300"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-500 mt-4">
          No favorite movies added yet.
        </p>
      )}
    </div>
  );
};

export default FavoriteMovies;
