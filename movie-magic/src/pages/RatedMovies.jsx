/* eslint-disable react/prop-types */
const RatedMovies = ({ userRatings }) => {
  const ratedMovies = Object.entries(userRatings).filter(
    ([_, data]) => data.rating !== null
  );

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Rated Movies</h2>
      {ratedMovies.length > 0 ? (
        <ul className="space-y-4">
          {ratedMovies.map(([movieId, data]) => (
            <li key={movieId} className="p-4 bg-gray-100 rounded-lg">
              <p>
                <strong>Movie ID:</strong> {movieId}
              </p>
              <p>
                <strong>Rating:</strong> ⭐ {data.rating}/10
              </p>
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
