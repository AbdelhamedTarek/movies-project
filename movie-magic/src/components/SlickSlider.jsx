import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickSlider.css";
import MovieCard from "./MovieCard";
import Modal from "./Modal";
import useMovieStore from "../store";

const SlickSlider = () => {
  const { topRatedMovies, selectedMovie } = useMovieStore();

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
      <div className="slider-container px-6 py-10">
        <Slider {...settings}>
          {topRatedMovies.map((topRatedMovie, index) => (
            <div className="slide-item" key={index}>
              <MovieCard movie={topRatedMovie} />
            </div>
          ))}
        </Slider>
      </div>
      <div>{selectedMovie ? <Modal /> : null}</div>
    </>
  );
};

export default SlickSlider;
