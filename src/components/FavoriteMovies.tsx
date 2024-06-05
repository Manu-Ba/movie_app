import { IndexRouteObject } from "react-router-dom";
import { useGetAllFavorites } from "../hooks/useGetAllFavorites";
import { favoriteMovieType } from "../types/type";
import { Header } from "./Header";

export const FavoriteMovies = () => {
  const {
    data: favMovieList,
    isLoading: isLoadingGetAllFavorites,
    isError: isErrorGetAllFavorites,
  } = useGetAllFavorites();
  return (
    <>
      <Header page="favorites" />

      <h1>Favorite Movies should show up here:</h1>
      {/* separate component for list item */}

      {favMovieList && (
        <>
          {favMovieList.map((favMovie: favoriteMovieType) => (
            <span key={favMovie.id}>imdbID: {favMovie.imdbID}</span>
          ))}
        </>
      )}
      {isLoadingGetAllFavorites && <span>Loading...</span>}
      {isErrorGetAllFavorites && <span>Error loading favorites.</span>}
    </>
  );
};
