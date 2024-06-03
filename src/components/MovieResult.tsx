import { useGetMovie } from "../hooks/useGetMovie";

type MovieResultProps = {
  searchData: string;
};

export const MovieResult = ({ searchData }: MovieResultProps) => {
  const {
    data: movie,
    isLoading: isLoadingGetMovie,
    isError: isErrorGetMovie,
  } = useGetMovie(searchData);

  return (
    <div className="px-10 sm:px-20">
      <h1 className="pb-3 text-2xl font-semibold">Results</h1>
      <div>
        {/* <div className="h-16 grid grid-cols-3 lg:grid-cols-2 border-b-[1px] text-slate-600 font-semibold">
          <span className="flex items-center h-full px-0 sm:px-3">Title</span>
          <span className="flex items-center justify-between w-full h-full col-span-2 gap-1 px-0 lg:w-3/4 sm:px-3 lg:col-span-1">
            <span className="w-full">Year</span>
            <span className="w-full">Type</span>
            <span className="w-full">Detailview</span>
          </span>
        </div> */}

        {movie && (
          <div className="flex flex-col">
            <h1>movie result here</h1>
            <img
              src={movie.Poster}
              alt="movie poster"
              className="w-1/2 lg:w-1/5"
            />
            <span>Title: {movie.Title}</span>
            <span>Year: {movie.Year}</span>
            <span>Genre: {movie.Genre}</span>
            <span>Summary: {movie.Plot}</span>
          </div>
        )}
        {isLoadingGetMovie && <p>Loading...</p>}
        {isErrorGetMovie && <p>Film konnte nicht geladen werden...</p>}
      </div>
    </div>
  );
};
