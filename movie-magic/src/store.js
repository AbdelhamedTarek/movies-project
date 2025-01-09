import { create } from "zustand";

const useMovieStore = create((set) => ({
  query: "",
  setQuery: (newQuery) => set({ query: newQuery }),

  error: "",
  setError: (newError) => set({ error: newError }),

  selectedMovie: null,
  setSelectedMovie: (movie) => set({ selectedMovie: movie }),

  userRatings: JSON.parse(localStorage.getItem("userRatings")) || {},
  setUserRatings: (updateFn) =>
    set((state) => {
      const updatedRatings = updateFn(state.userRatings);
      // Manually update localStorage
      localStorage.setItem("userRatings", JSON.stringify(updatedRatings));
      return { userRatings: updatedRatings };
    }),

  favoriteMovies: JSON.parse(localStorage.getItem("favoriteMovies")) || {},
  setFavoriteMovies: (updateFn) =>
    set((state) => {
      const updatedFavorites = updateFn(state.favoriteMovies);
      // Manually update localStorage
      localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
      return { favoriteMovies: updatedFavorites };
    }),

  topRatedMovies: [],
  setTopRatedMovies: (movies) =>
    set((state) => {
      if (JSON.stringify(state.topRatedMovies) !== JSON.stringify(movies)) {
        return { topRatedMovies: movies };
      }
      return state;
    }),

  searchResults: [],
  setSearchResults: (results) => set({ searchResults: results }),

  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
}));

export default useMovieStore;
