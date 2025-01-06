import { Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import RatedMovies from "./pages/RatedMovies";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  // Initialize userRatings from localStorage
  const [userRatings, setUserRatings] = useState(() => {
    const storedRatings = localStorage.getItem("userRatings");
    return storedRatings ? JSON.parse(storedRatings) : {};
  });

  // Save ratings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("userRatings", JSON.stringify(userRatings));
  }, [userRatings]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout
              selectedMovie={selectedMovie}
              setSelectedMovie={setSelectedMovie}
              userRatings={userRatings}
              setUserRatings={setUserRatings}
            />
          }
        />
        {/* <Route path="/watched" element={<WatchedMovies />} /> */}
        <Route
          path="/top-rated"
          element={<RatedMovies userRatings={userRatings} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
