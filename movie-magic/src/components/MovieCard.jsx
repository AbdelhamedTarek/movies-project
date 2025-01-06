/* eslint-disable react/prop-types */
// import { useNavigate } from "react-router";

const MovieCard = ({ movie, onCardClick }) => {
  // const navigate = useNavigate();
  const handleViewMovie = () => {
    onCardClick(movie);
  };
  const releaseYear = new Date(movie.release_date).getFullYear();

  return (
    <div
      onClick={handleViewMovie}
      className="flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow-lg p-4 hover:scale-105 transition-transform duration-300 ease-in-out"
      style={{ width: "250px", height: "400px" }} // Explicit size for each card
    >
      <img
        className="w-full h-3/4 object-cover rounded-t-lg mb-2"
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://via.placeholder.com/500x750"
        }
        alt={movie.original_title}
      />
      <p className="text-center text-lg font-semibold text-gray-800 truncate">
        {movie.original_title.split(" ").slice(0, 3).join(" ")}
      </p>
      <p className="text-center text-md text-gray-600">{releaseYear}</p>
    </div>
  );
};

export default MovieCard;
