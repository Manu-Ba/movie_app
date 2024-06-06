import { useGetMovie } from "../hooks/useGetMovie";
import { MovieType } from "../types/type";
import { MovieListItem } from "./MovieListItem";

type MovieResultProps = {
  searchData: string;
};

// movie search results
export const MovieResult = ({ searchData }: MovieResultProps) => {
  const {
    data: movies,
    isLoading: isLoadingGetMovie,
    isError: isErrorGetMovie,
  } = useGetMovie(searchData);

  return (
    <div className="px-10 sm:px-20">
      <h1 className="pb-3 text-2xl font-semibold">Results</h1>
      <div className="pb-20">
        <div className="h-16 grid grid-cols-3 lg:grid-cols-2 border-b-[1px] text-slate-600 font-semibold">
          <span className="flex items-center h-full px-0 sm:px-3">Title</span>
          <span className="flex items-center justify-between w-full h-full col-span-2 gap-1 px-0 lg:w-3/4 sm:px-3 lg:col-span-1">
            <span className="w-full">Year</span>
            <span className="w-full">Detailview</span>
          </span>
        </div>

        {movies &&
          (movies.Response == "True" ? (
            <>
              {movies.Search.map((movie: MovieType) => (
                <MovieListItem movie={movie} key={movie.imdbID} />
              ))}
            </>
          ) : (
            <span>{movies.Error}</span>
          ))}
        {isLoadingGetMovie && <p>Loading...</p>}
        {isErrorGetMovie && <p>Daten konnten nicht geladen werden...</p>}
      </div>
    </div>
  );
};
