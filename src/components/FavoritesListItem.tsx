import { useGetMovieByImdbID } from "../hooks/useGetMovieByImdbID";
import { favoriteMovieType } from "../types/type";

type FavoritesListItemProps = {
  mov: favoriteMovieType;
};

export const FavoritesListItem = ({ mov }: FavoritesListItemProps) => {
  const {
    data: movie,
    isLoading: isLoadingGetMovie,
    isError: isErrorGetMovie,
  } = useGetMovieByImdbID(mov.imdbID);
  return (
    <>
      {movie && (
        <div className="h-16 grid grid-cols-3 lg:grid-cols-2 border-b-[1px] font-light">
          <span className="flex items-center h-full px-0 sm:px-3">
            {movie.Title}
          </span>
          <span className="flex items-center justify-between w-full h-full col-span-2 gap-1 px-0 lg:w-3/4 sm:px-3 lg:col-span-1">
            <span className="w-full">{movie.Year}</span>
            <span className="w-full">{mov.starRating}</span>

            <a
              href={`/${movie.imdbID}`}
              className="flex items-center w-full h-12"
            >
              <button className="w-full h-12 font-normal text-white rounded-md bg-gradient-to-r from-pink-500 to-orange-400">
                Show more
              </button>
            </a>
          </span>
        </div>
      )}
      {isLoadingGetMovie && <span>Loading...</span>}
      {isErrorGetMovie && <span>Error fetching movie.</span>}
    </>
  );
};
