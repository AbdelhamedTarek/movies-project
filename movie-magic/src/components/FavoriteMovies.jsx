/* eslint-disable react/prop-types */
const FavoriteMovies = ({ favoriteMovies, setFavoriteMovies }) => {
  const handleRemoveFromFavorites = (movieId) => {
    setFavoriteMovies((prevFavorites) => {
      const updatedFavorites = { ...prevFavorites };
      delete updatedFavorites[movieId];
      return updatedFavorites;
    });
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Favorite Movies</h2>
      {Object.keys(favoriteMovies).length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Object.entries(favoriteMovies).map(([movieId, movie]) => (
            <div key={movieId} className="bg-gray-100 rounded-lg p-4">
              <img
                src={movie.image}
                alt={movie.name}
                className="w-full h-auto rounded mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{movie.name}</h3>
              <button
                onClick={() => handleRemoveFromFavorites(movieId)}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No favorite movies added yet.</p>
      )}
    </div>
  );
};

export default FavoriteMovies;
