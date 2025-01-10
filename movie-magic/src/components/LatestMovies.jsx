import { useEffect } from "react";
import SlickSlider from "./SlickSlider";
import useMovieStore from "../store";
import axios from "axios";

const LatestMovies = () => {
  const { setIsLoading, setError, setTopRatedMovies, topRatedMovies } =
    useMovieStore();

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      setIsLoading(true);
      setError(""); // Reset error state

      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${
            import.meta.env.VITE_API_KEY
          }`
        );

        // Avoid redundant updates
        if (
          JSON.stringify(topRatedMovies) !== JSON.stringify(res.data.results)
        ) {
          setTopRatedMovies(res.data.results);
        }
      } catch {
        setError("Failed to fetch top-rated movies. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    // Fetch only if topRatedMovies is empty
    if (topRatedMovies.length === 0) {
      fetchTopRatedMovies();
    }
  }, [setError, setIsLoading, setTopRatedMovies, topRatedMovies]);

  return <SlickSlider />;
};

export default LatestMovies;
