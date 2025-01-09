import LatestMovies from "../components/LatestMovies";
import Movies from "../components/Movies";
import Spinner from "../components/Spinner";
import useMovieStore from "../store";

const AppLayout = () => {
  const { error, searchResults, isLoading, query } = useMovieStore();

  return (
    <div className="relative h-full font-inter text-gray-100">
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-black bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
      ></div>

      {/* Content Wrapper */}
      <div className="relative bg-black bg-opacity-80 h-full">
        {/* Loading Spinner */}
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <Spinner />
          </div>
        ) : error ? (
          /* Error Message */
          <div className="absolute left-0 w-full bg-red-600 text-white p-4 rounded-md text-center shadow-md">
            <span className="font-semibold">{error}</span>
          </div>
        ) : query && searchResults.length > 0 ? (
          <>
            {/* Search Results Heading */}
            <h1 className="text-4xl font-bold text-center p-4 text-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Search Results
            </h1>
            <Movies />
          </>
        ) : (
          <>
            {/* Top Rated Movies Heading */}
            <h1 className="text-4xl font-bold text-center p-4 text-gradient bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Top Rated Movies
            </h1>
            <LatestMovies />
          </>
        )}
      </div>
    </div>
  );
};

export default AppLayout;
