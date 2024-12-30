import AppLayout from "./pages/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WatchedMovies from "./pages/WatchedMovies";
import RatedMovies from "./pages/RatedMovies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/watched-movies" element={<WatchedMovies />} />
        <Route path="/rated-movies" element={<RatedMovies />} />
      </Routes>
      {/* <AppLayout /> */}
    </BrowserRouter>
  );
}

export default App;
