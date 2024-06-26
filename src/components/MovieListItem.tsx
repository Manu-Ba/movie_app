import { MovieType } from "../types/type";

type MovieListItemProps = {
  movie: MovieType;
};

// single list item in search results
export const MovieListItem = ({ movie }: MovieListItemProps) => {
  return (
    <div className="grid grid-cols-3 font-light border-b min-h-16 lg:grid-cols-2">
      <span className="flex items-center h-full px-0 sm:px-3">
        {movie.Title}
      </span>
      <span className="flex items-center justify-between w-full h-full col-span-2 gap-1 px-0 lg:w-3/4 sm:px-3 lg:col-span-1">
        <span className="w-full">{movie.Year}</span>

        <a href={`/${movie.imdbID}`} className="flex items-center w-full h-12">
          <button className="w-full h-12 font-normal text-white rounded-md bg-gradient-to-r from-pink-500 to-orange-400 hover:from-orange-400 hover:to-pink-500 hover:opacity-80">
            Show more
          </button>
        </a>
      </span>
    </div>
  );
};
