import { Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import WatchedMovies from "./pages/WatchedMovies";
import RatedMovies from "./pages/RatedMovies";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/watched" element={<WatchedMovies />} />
        <Route path="/top-rated" element={<RatedMovies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
