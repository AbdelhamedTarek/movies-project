/* eslint-disable react/prop-types */
import SlickSlider from "./SlickSlider";

const LatestMovies = ({
  topRatedMovies,
  onCardClick,
  onClose,
  selectedMovie,
  userRatings,
  setUserRatings,
  setFavoriteMovies,
  favoriteMovies,
}) => {
  return (
    <SlickSlider
      topRatedMovies={topRatedMovies}
      onClose={onClose}
      onCardClick={onCardClick}
      selectedMovie={selectedMovie}
      userRatings={userRatings}
      setUserRatings={setUserRatings}
      setFavoriteMovies={setFavoriteMovies}
      favoriteMovies={favoriteMovies}
    />
  );
};

export default LatestMovies;
