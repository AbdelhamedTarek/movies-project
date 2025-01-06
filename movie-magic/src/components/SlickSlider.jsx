/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickSlider.css";
import MovieCard from "./MovieCard";
import Modal from "./Modal";

const SlickSlider = ({
  topRatedMovies,
  onClose,
  selectedMovie,
  onCardClick,
  userRatings,
  setUserRatings,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="slider-container px-6 py-10 bg-transparent]">
        <Slider {...settings}>
          {topRatedMovies.map((topRatedMovie, index) => (
            <div className="p-10" key={index}>
              <MovieCard movie={topRatedMovie} onCardClick={onCardClick} />
            </div>
          ))}
        </Slider>
      </div>
      <div>
        {selectedMovie ? (
          <Modal
            onClose={onClose}
            selectedMovie={selectedMovie}
            userRatings={userRatings}
            setUserRatings={setUserRatings}
          />
        ) : null}
      </div>
    </>
  );
};

export default SlickSlider;

{
  /* <div key={index} className="slick-slide">
<img
  src={`https://image.tmdb.org/t/p/w500${topRatedMovie.poster_path}`}
  alt={`Slide ${index + 1}`}
/>
</div> */
}
