import { useAddFavorite } from "../hooks/useAddFavorite";
import { MovieType } from "../types/type";

type MovieListItemProps = {
  movie: MovieType;
};

export const MovieListItem = ({ movie }: MovieListItemProps) => {
  const {
    isLoading: isLoadingAddFavorite,
    isError: isErrorErrorAddFavorite,
    mutate: addFavorite,
  } = useAddFavorite();
  return (
    <div className="h-16 grid grid-cols-3 lg:grid-cols-2 border-b-[1px] font-light">
      <span className="flex items-center h-full px-0 sm:px-3">
        {movie.Title}
      </span>
      <span className="flex items-center justify-between w-full h-full col-span-2 gap-1 px-0 lg:w-3/4 sm:px-3 lg:col-span-1">
        <span className="w-full">{movie.Year}</span>
        <span className="w-full">{movie.Type}</span>

        <a href={`/${movie.imdbID}`} className="flex items-center w-full h-12">
          <button className="w-full h-12 font-normal text-white rounded-md bg-gradient-to-r from-pink-500 to-orange-400">
            Show more
          </button>
        </a>
        <button
          onClick={() => addFavorite(movie.imdbID)}
          className="h-12 px-8 border rounded-md hover:bg-slate-100"
        >
          favorite
        </button>
      </span>
    </div>
  );
};
