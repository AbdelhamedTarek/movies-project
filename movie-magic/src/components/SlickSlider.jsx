import { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickSlider.css";

const SlickSlider = () => {
  const [slides, setSlides] = useState([]);
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const getLatestmovies = async () => {
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=4075d940&s=new&type=movie&y=2024`
      );
      const data = await res.data.Search;
      setSlides(data);
    };

    getLatestmovies();
  }, [setSlides]);

  // const slides = [
  //   "https://via.placeholder.com/600x300/FF5733",
  //   "https://via.placeholder.com/600x300/33FF57",
  //   "https://via.placeholder.com/600x300/3357FF",
  //   "https://via.placeholder.com/600x300/FFFF33",
  // ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slick-slide">
            <img src={slide.Poster} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
