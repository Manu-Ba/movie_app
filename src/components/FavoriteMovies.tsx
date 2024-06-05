import { useGetAllFavorites } from "../hooks/useGetAllFavorites";
import { favoriteMovieType } from "../types/type";
import { Header } from "./Header";
import { FavoritesListItem } from "./FavoritesListItem";

export const FavoriteMovies = () => {
  const {
    data: favMovieList,
    isLoading: isLoadingGetAllFavorites,
    isError: isErrorGetAllFavorites,
  } = useGetAllFavorites();
  return (
    <>
      <Header page="favorites" />
      <div className="px-10 sm:px-20">
        <div>
          <div className="h-16 grid grid-cols-3 lg:grid-cols-2 border-b-[1px] text-slate-600 font-semibold">
            <span className="flex items-center h-full px-0 sm:px-3">Title</span>
            <span className="flex items-center justify-between w-full h-full col-span-2 gap-1 px-0 lg:w-3/4 sm:px-3 lg:col-span-1">
              <span className="w-full">Year</span>
              <span className="w-full">StarRating</span>
              <span className="w-full">Detailview</span>
            </span>
          </div>

          {favMovieList && (
            <div className="flex flex-col">
              {favMovieList.map((favMovie: favoriteMovieType) => (
                <FavoritesListItem key={favMovie.id} mov={favMovie} />
              ))}
            </div>
          )}
          {isLoadingGetAllFavorites && <span>Loading...</span>}
          {isErrorGetAllFavorites && <span>Error loading favorites.</span>}
        </div>
      </div>
    </>
  );
};
