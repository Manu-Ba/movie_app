import { favoriteMovieList } from "../data/favorites";
import { favoriteMovieType } from "../types/type";
import { Header } from "./Header";

export const FavoriteMovies = () => {
  return (
    <>
      <Header page="favorites" />

      {favoriteMovieList.map((movie: favoriteMovieType) => {
        <div>Movie: {movie.imdbID}</div>;
      })}
    </>
  );
};
