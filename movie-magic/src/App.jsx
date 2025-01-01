import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import AppLayout from "./pages/AppLayout";
import WatchedMovies from "./pages/WatchedMovies";
import RatedMovies from "./pages/RatedMovies";
import MovieDetails from "./pages/MovieDetails";

function App() {
  const [search, setSearch] = useState("");
  const location = useLocation();

  const showNavbar = !location.pathname.startsWith("/movie");

  return (
    <>
      {showNavbar && <Navbar search={search} setSearch={setSearch} />}
      <Routes>
        <Route path="/" element={<AppLayout search={search} />} />
        <Route path="/watched-movies" element={<WatchedMovies />} />
        <Route path="/rated-movies" element={<RatedMovies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </>
  );
}

export default App;
