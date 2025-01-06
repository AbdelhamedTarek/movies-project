/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import LatestMovies from "../components/LatestMovies";
import Movies from "../components/Movies";
import axios from "axios";
import Navbar from "../components/Navbar";
import Spinner from "../components/Spinner";

const AppLayout = ({
  selectedMovie,
  setSelectedMovie,
  userRatings,
  setUserRatings,
}) => {
  const [query, setQuery] = useState("");
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCardClick = (movie) => {
    setSelectedMovie(movie); // Set the selected movie details
  };

  const handleCloseModal = () => {
    setSelectedMovie(null); // Close the modal
  };

  useEffect(() => {
    const getLatestmovies = async () => {
      setIsLoading(true);
      setError("");
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=13e6d1fcf4b3b0b9f023ac7a2d283e38`
        );
        const data = await res.data.results;
        setTopRatedMovies(data);
      } catch (err) {
        setError("Failed to fetch top-rated movies. Please try again later.");
      } finally {
        setIsLoading(false);
        setError("");
      }
    };

    getLatestmovies();
  }, []);

  useEffect(() => {
    if (!query) {
      setSearchResults([]);
      return;
    }
    const fetchMovies = async () => {
      setIsLoading(true);
      setError("");
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=13e6d1fcf4b3b0b9f023ac7a2d283e38&query=${query}`
        );
        const data = await res.json();
        if (data.results && data.results.length > 0) {
          setSearchResults(data.results);
        } else {
          setError("No results found. Please try searching for another movie.");
        }
        // setSearchResults(data.results);
      } catch (err) {
        setError("Failed to fetch search results. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <>
      <Navbar query={query} setQuery={setQuery} setError={setError} />
      <div className="relative h-full">
        <div
          className="absolute inset-0 bg-[url('img/hero-bg.jpg')] bg-cover bg-center bg-no-repeat"
          aria-hidden="true"
        ></div>
        <div className="relative bg-black bg-opacity-70 h-full">
          {isLoading ? (
            <div className="flex justify-center items-center h-screen">
              <Spinner />
            </div>
          ) : error ? (
            <div className="flex justify-center items-center h-full">
              <p className="text-red-500 text-2xl">{error}</p>
            </div>
          ) : searchResults.length <= 0 ? (
            <>
              <h1 className="text-[#f9f9f9] text-3xl text-center mt-3 mb-3 p-4">
                Top Rated Movies
              </h1>
              <LatestMovies
                topRatedMovies={topRatedMovies}
                selectedMovie={selectedMovie}
                onClose={handleCloseModal}
                onCardClick={handleCardClick}
                userRatings={userRatings}
                setUserRatings={setUserRatings}
              />
            </>
          ) : (
            <>
              <h1 className="text-[#f9f9f9] text-3xl text-center mt-3 mb-3 p-4">
                Search Results
              </h1>
              <Movies
                searchResults={searchResults}
                selectedMovie={selectedMovie}
                onClose={handleCloseModal}
                onCardClick={handleCardClick}
                userRatings={userRatings}
                setUserRatings={setUserRatings}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AppLayout;
