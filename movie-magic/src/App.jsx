import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import WatchedMovies from "./pages/WatchedMovies";
import RatedMovies from "./pages/RatedMovies";
import MovieDetails from "./pages/MovieDetails";
import Navbar from "./components/Navbar";

function App() {
  const [search, setSearch] = useState("");
  return (
    <BrowserRouter>
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<AppLayout search={search} />} />
        <Route path="/watched-movies" element={<WatchedMovies />} />
        <Route path="/rated-movies" element={<RatedMovies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
