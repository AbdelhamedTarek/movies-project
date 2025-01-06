/* eslint-disable react/prop-types */
import SlickSlider from "./SlickSlider";

const LatestMovies = ({
  topRatedMovies,
  onCardClick,
  onClose,
  selectedMovie,
  userRatings,
  setUserRatings,
}) => {
  return (
    <SlickSlider
      topRatedMovies={topRatedMovies}
      onClose={onClose}
      onCardClick={onCardClick}
      selectedMovie={selectedMovie}
      userRatings={userRatings}
      setUserRatings={setUserRatings}
    />
  );
};

export default LatestMovies;
