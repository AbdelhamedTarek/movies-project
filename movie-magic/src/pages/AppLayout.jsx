import LatestMovies from "../components/LatestMovies";
import Navbar from "../components/Navbar";

const AppLayout = () => {
  return (
    <div className="bg-black h-screen">
      <Navbar />
      <h1 className="text-[#3689e3] text-3xl text-center mt-3 mb-3 p-4 ">
        Latest Movies
      </h1>
      <LatestMovies />
    </div>
  );
};

export default AppLayout;
