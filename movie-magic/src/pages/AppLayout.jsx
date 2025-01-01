/* eslint-disable react/prop-types */
import LatestMovies from "../components/LatestMovies";
import Movies from "../components/Movies";

const AppLayout = ({ search }) => {
  return (
    <>
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-[url('img/hero-bg.jpg')] bg-cover bg-center bg-no-repeat"
          aria-hidden="true"
        ></div>
        <div className="relative bg-black bg-opacity-70 h-full">
          <h1 className="text-[#f9f9f9] text-3xl text-center mt-3 mb-3 p-4 ">
            Latest Movies
          </h1>
          <LatestMovies />
        </div>
      </div>
      <Movies search={search} />
    </>
  );
};

export default AppLayout;
