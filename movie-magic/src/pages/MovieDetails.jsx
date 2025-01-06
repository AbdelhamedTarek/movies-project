import { Link, useParams } from "react-router-dom";
import "./MovieDetails.css";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [crew, setCrew] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=13e6d1fcf4b3b0b9f023ac7a2d283e38
`
      );
      const data = await res.data;
      console.log(data);
      setMovie(data);
    };
    fetchMovieDetails();
  }, [id]);
  useEffect(() => {
    const fetchMovieCrew = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=13e6d1fcf4b3b0b9f023ac7a2d283e38
`
      );
      const data = await res.data;
      console.log(data);
      setCrew(data);
    };
    fetchMovieCrew();
  }, [id]);

  const releaseYear = new Date(movie.release_date).getFullYear();

  return (
    <section
      className="relative p-6 min-h-screen"
      style={{
        backgroundImage: movie.backdrop_path
          ? `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: movie.backdrop_path ? "rgba(0, 0, 0, 0.2)" : "#333", // Darker fallback color
        color: "#fff",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
      <div>
        <Link className="btn" to="/">
          Back To Movies
        </Link>
      </div>

      <div className="container p-6">
        <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-10 items-center">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="Movie Title"
            />
          </div>
          <div>
            <h2 className="text-center">{movie.original_title}</h2>
            <p>
              <i className="fas fa-star text-yellow-400"></i>{" "}
              {movie.vote_average} / 10
            </p>
            <p className="text-slate-700">Release Year: {releaseYear}</p>
            <p>{movie.Plot}</p>
            <h5 className="text-slate-700">Genres</h5>
            <ul className="list-group mb-7">
              {movie.genres &&
                movie.genres.map((genre, i) => <li key={i}>{genre.name}</li>)}
            </ul>
            {movie.homepage === "" ? null : (
              <Link to={movie.homepage} target="_blank" className="btn">
                Visit Movie Homepage
              </Link>
            )}
          </div>
        </div>
        <div className="details-bottom">
          <h2>{movie.original_title} Info</h2>
          <ul>
            <li>
              <span className="text-slate-700">Budget : </span> ${movie.budget}
            </li>
            <li>
              <span className="text-slate-700">Actors : </span>
              {crew.cast &&
                crew.cast
                  .slice(0, 3)
                  .map((actor) => actor.name)
                  .join(", ")}
            </li>
            <li>
              <span className="text-slate-700">Director: </span>
              {crew.crew &&
                crew.crew.find((person) => person.job === "Director").name}
            </li>
            <li>
              <span className="text-slate-700">Runtime:</span> {movie.runtime}{" "}
              mins
            </li>
            <li>
              <span className="text-slate-700">Status:</span>{" "}
              {releaseYear < 2025 ? "Released" : "Coming Soon"}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
