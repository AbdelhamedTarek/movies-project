import { useEffect } from "react";
import useMovieStore from "../store";
import axios from "axios";

const SearchBar = () => {
  const { query, setQuery, setError, setSearchResults, setIsLoading } =
    useMovieStore();

  useEffect(() => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const fetchMovies = async () => {
      setIsLoading(true);
      setError("");
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=13e6d1fcf4b3b0b9f023ac7a2d283e38&query=${encodeURIComponent(
            query
          )}`
        );
        setSearchResults(res.data.results || []);
      } catch {
        setError("Failed to fetch search results. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [query, setError, setIsLoading, setSearchResults]);

  return (
    <div className="flex items-center justify-center space-x-4 mb-4 md:mb-0">
      <input
        type="text"
        id="search"
        className="w-80 p-4 bg-blue-600 text-white placeholder-white rounded-full focus:outline-none"
        placeholder="Search Movie by Name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="px-5 py-3 bg-blue-800 text-white font-medium rounded-full hover:bg-blue-700 focus:outline-none"
        onClick={(e) => {
          e.preventDefault();
          if (!query.trim()) {
            setError("Please search for a movie by its title or name");
            setTimeout(() => setError(""), 3000);
            return;
          }
          setError("");
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
