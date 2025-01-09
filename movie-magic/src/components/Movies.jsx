import MovieCard from "./MovieCard";
import Modal from "./Modal";
import useMovieStore from "../store";

const Movies = () => {
  const { searchResults, selectedMovie } = useMovieStore();
  return (
    <>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {searchResults &&
          searchResults.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
      <div>{selectedMovie ? <Modal /> : null}</div>
    </>
  );
};

export default Movies;
