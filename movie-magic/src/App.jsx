import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import AppLayout from "./pages/AppLayout";
import RatedMovies from "./pages/RatedMovies";
import NotFound from "./pages/NotFound";
import FavoriteMovies from "./components/FavoriteMovies";
import Navbar from "./components/Navbar";

function App() {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  // Initialize userRatings from localStorage
  const [userRatings, setUserRatings] = useState(() => {
    const storedRatings = localStorage.getItem("userRatings");
    return storedRatings ? JSON.parse(storedRatings) : {};
  });
  const [favoriteMovies, setFavoriteMovies] = useState(() => {
    const storedFavorites = localStorage.getItem("favoriteMovies");
    return storedFavorites ? JSON.parse(storedFavorites) : {};
  });

  // Sync favorites to localStorage
  useEffect(() => {
    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

  // Save ratings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("userRatings", JSON.stringify(userRatings));
  }, [userRatings]);

  return (
    <>
      <Navbar query={query} setQuery={setQuery} setError={setError} />
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout
              selectedMovie={selectedMovie}
              setSelectedMovie={setSelectedMovie}
              userRatings={userRatings}
              setUserRatings={setUserRatings}
              setFavoriteMovies={setFavoriteMovies}
              favoriteMovies={favoriteMovies}
              error={error}
              setError={setError}
              query={query}
              setQuery={setQuery}
            />
          }
        />
        <Route
          path="/top-rated"
          element={
            <RatedMovies
              userRatings={userRatings}
              setUserRatings={setUserRatings}
            />
          }
        />
        <Route
          path="/favorite"
          element={
            <FavoriteMovies
              favoriteMovies={favoriteMovies}
              setFavoriteMovies={setFavoriteMovies}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
