import { useParams } from "react-router-dom";
import { Header } from "./Header";
import { useGetMovieByImdbID } from "../hooks/useGetMovieByImdbID";
import { useGetSingleFavorite } from "../hooks/useGetSingleFavorite";
import { useAddFavorite } from "../hooks/useAddFavorite";
import { FavoriteMovieData } from "./FavoriteMovieData";

export const SingleMovie = () => {
  const { movieID } = useParams();
  const stringMovieID = String(movieID);

  const {
    data,
    isLoading: isLoadingGetMovie,
    isError: isErrorGetMovie,
  } = useGetMovieByImdbID(stringMovieID);

  const {
    data: fav,
    isLoading: isLoadingGetFavorite,
    isError: isErrorGetFavorite,
  } = useGetSingleFavorite(stringMovieID);

  const { mutate: addFavorite } = useAddFavorite();

  return (
    <>
      <Header page="" />
      {data && (
        <div className="flex flex-col px-10 pt-20 font-light sm:px-20 text-md lg:text-lg">
          <div className="flex flex-col gap-10 pb-10 lg:flex-row lg:gap-24">
            <img
              src={data.Poster}
              alt="movie poster"
              className="w-1/2 lg:w-1/5"
            />
            <div className="flex flex-col lg:pt-8">
              <h1 className="pb-5 text-xl font-semibold lg:text-4xl">
                {data.Title}
              </h1>
              <span>
                {data.Year} / {data.Genre}
              </span>
            </div>
          </div>
          <div className="flex min-h-14 border-b-[1px] items-center gap-5">
            <span className="w-1/6 pl-2 font-semibold md:w-1/12">Title</span>
            {data.Title}
          </div>
          <div className="flex min-h-14 border-b-[1px] items-center gap-5">
            <span className="w-1/6 pl-2 font-semibold md:w-1/12">Year</span>
            {data.Year}
          </div>
          <div className="flex min-h-14 border-b-[1px] items-center gap-5">
            <span className="w-1/6 pl-2 font-semibold md:w-1/12">Genre</span>
            {data.Genre}
          </div>
          <div className="flex min-h-14 py-4 border-b-[1px] items-center gap-5">
            <span className="w-1/6 pl-2 font-semibold md:w-1/12">Plot</span>
            <span className="w-5/6 md:w-11/12">{data.Plot}</span>
          </div>
          <div className="flex min-h-14 border-b-[1px] items-center gap-5">
            <span className="w-1/6 pl-2 font-semibold md:w-1/12">Type</span>
            {data.Type}
          </div>
          <div className="flex min-h-14 border-b-[1px] items-center gap-5">
            <span className="w-3/12 pl-2 font-semibold md:w-1/12">
              Released
            </span>
            {data.Released}
          </div>
        </div>
      )}
      <div className="flex flex-col px-10 py-20 font-light sm:px-20 text-md lg:text-lg">
        {isLoadingGetMovie && <p>Loading...</p>}
        {isErrorGetMovie && <p>Daten konnten nicht geladen werden...</p>}
        {isLoadingGetFavorite && <span>Loading...</span>}
        {fav && fav.length > 0 ? (
          <FavoriteMovieData fav={fav[0]} />
        ) : (
          <button
            onClick={() => addFavorite(stringMovieID)}
            className="h-12 px-8 border rounded-md hover:bg-slate-100"
          >
            favorite
          </button>
        )}
        {isErrorGetFavorite && (
          <span>error loading information about favorites.</span>
        )}
      </div>
    </>
  );
};
