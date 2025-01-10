import { useEffect } from "react";
import useMovieStore from "../store";
import axios from "axios";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { query, setQuery, setError, setSearchResults, setIsLoading } =
    useMovieStore();
  const location = useLocation();

  // Clear search results on page navigation
  useEffect(() => {
    setSearchResults([]);
  }, [location.pathname, setSearchResults, setQuery]);

  // Clear search results if the query is empty
  useEffect(() => {
    if (!query.trim()) {
      setSearchResults([]); // Clear results if query is empty
    }
  }, [query, setSearchResults]);

  const fetchMovies = async () => {
    if (!query.trim()) {
      setError("Please enter a movie title to search.");
      setTimeout(() => setError(""), 3000);
      return;
    }

    setIsLoading(true);
    setError("");
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=13e6d1fcf4b3b0b9f023ac7a2d283e38&query=${encodeURIComponent(
          query
        )}`
      );
      if (res.data.results.length === 0) {
        setError(`No results found for "${query}". Please try another search.`);
        setSearchResults([]);
        setTimeout(() => {
          setError("");
        }, 3000);
      } else {
        setSearchResults(res.data.results);
      }
    } catch {
      setError("Failed to fetch search results. Please try again");
    } finally {
      setIsLoading(false);
    }
  };

  // Reset the query after search is complete

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      fetchMovies();
    }
  };

  return (
    <>
      <div className="flex items-center justify-center space-x-4 mb-4 md:mb-0">
        <input
          type="text"
          id="search"
          className="w-80 p-4 bg-blue-600 text-white placeholder-white rounded-full focus:outline-none"
          placeholder="Search Movie by Name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress} // Detect Enter key
        />
        <button
          className="px-5 py-3 bg-blue-800 text-white font-medium rounded-full hover:bg-blue-700 focus:outline-none"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default SearchBar;
