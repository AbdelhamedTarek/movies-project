import { Routes, Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import RatedMovies from "./pages/RatedMovies";
import NotFound from "./pages/NotFound";
import FavoriteMovies from "./pages/FavoriteMovies";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Navbar />
          <Routes>
            <Route path="/" element={<AppLayout />} />
            <Route path="/top-rated" element={<RatedMovies />} />
            <Route path="/favorite" element={<FavoriteMovies />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
