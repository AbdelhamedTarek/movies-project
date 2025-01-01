/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const handleViewMovie = () => {
    navigate(`/movie/${movie.imdbID}`);
  };
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border-2 border-gray-300 p-4 m-4">
      <img
        className="w-full h-auto mb-4"
        src={
          movie.Poster && movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300"
        }
        alt={movie.Title}
      />
      <p className="text-lg">Movie Title: {movie.Title}</p>
      <p className="text-lg">Release Year: {movie.Year} </p>
      <div className=" flex justify-center items-center m-5">
        <button className="btn" onClick={handleViewMovie}>
          Movie Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
