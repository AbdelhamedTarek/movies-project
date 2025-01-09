import { Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import RatedMovies from "./pages/RatedMovies";
import NotFound from "./pages/NotFound";
import FavoriteMovies from "./pages/FavoriteMovies";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/top-rated" element={<RatedMovies />} />
        <Route path="/favorite" element={<FavoriteMovies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
