/* eslint-disable react/prop-types */
const RatedMovies = ({ userRatings, setUserRatings }) => {
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

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Rated Movies</h2>
      {ratedMovies.length > 0 ? (
        <ul className="space-y-4">
          {ratedMovies.map(([movieId, data]) => (
            <li
              key={movieId}
              className="p-4 bg-gray-100 rounded-lg flex items-center space-x-4"
            >
              <img
                src={data.image}
                alt={data.name}
                className="w-24 h-36 rounded object-cover"
              />
              <div className="flex-grow">
                <p className="text-lg font-semibold">{data.name}</p>
                <p>
                  <strong>Rating:</strong> ⭐ {data.rating}/10
                </p>
              </div>
              <button
                onClick={() => handleDelete(movieId)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies rated yet.</p>
      )}
    </div>
  );
};

export default RatedMovies;
