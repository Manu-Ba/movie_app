import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useDeleteFavorite } from "../hooks/useDeleteFavorite";
import { useRateMovie } from "../hooks/useRateMovie";
import { favoriteMovieType } from "../types/type";
import { useAddComment } from "../hooks/useAddComment";

type FavoriteMovieDataProps = {
  fav: favoriteMovieType;
};

type Inputs = {
  comment: string;
};

const schema = yup.object().shape({
  comment: yup.string().required("* Comment text is required."),
});

export const FavoriteMovieData = ({ fav }: FavoriteMovieDataProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const {
    isLoading: isLoadingDeleteFavorite,
    isError: isErrorDeleteFavorite,
    mutate: deleteFavorite,
  } = useDeleteFavorite();
  const {
    isLoading: isLoadingRateMovie,
    isError: isErrorRateMovie,
    mutate: rateMovie,
  } = useRateMovie();
  const {
    isLoading: isLoadingAddComment,
    isError: isErrorAddComment,
    mutate: addComment,
  } = useAddComment();

  const [rate, setRate] = useState(false);
  const [comment, setComment] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const starRateMovie = (rating: number) => {
    rateMovie({ imdbID: fav.imdbID, rating: rating });
    setRate(false);
  };

  const onSubmit = (data: Inputs) => {
    addComment({ imdbID: fav.imdbID, comment: data.comment });
    setComment(false);
  };

  return (
    <div>
      <div className="flex justify-between">
        {rate ? (
          <div>
            <button
              onClick={() => starRateMovie(1)}
              className="h-12 px-2 border rounded-md hover:bg-slate-100"
            >
              1⭐️
            </button>
            <button
              onClick={() => starRateMovie(2)}
              className="h-12 px-2 border rounded-md hover:bg-slate-100"
            >
              2⭐️
            </button>
            <button
              onClick={() => starRateMovie(3)}
              className="h-12 px-2 border rounded-md hover:bg-slate-100"
            >
              3⭐️
            </button>
            <button
              onClick={() => starRateMovie(4)}
              className="h-12 px-2 border rounded-md hover:bg-slate-100"
            >
              4⭐️
            </button>
            <button
              onClick={() => starRateMovie(5)}
              className="h-12 px-2 border rounded-md hover:bg-slate-100"
            >
              5⭐️
            </button>
          </div>
        ) : (
          <span>Star Rating: {fav.starRating}</span>
        )}
        <button
          onClick={() => setRate(!rate)}
          className="h-12 px-5 border rounded-md hover:bg-slate-100"
        >
          rate movie
        </button>
      </div>
      {isLoadingRateMovie && <span>Loading...</span>}
      {isErrorRateMovie && (
        <span>An error occurred while rating the movie.</span>
      )}
      <div className="mt-10">
        <div className="flex justify-between">
          <h1 className="font-semibold">Comments:</h1>
          <button
            onClick={() => setComment(!comment)}
            className="h-12 px-5 border rounded-md hover:bg-slate-100"
          >
            add comment
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {fav.comments.map((comment: string, index: number) => (
            <span key={index}>{comment}</span>
          ))}
        </div>

        {isLoadingAddComment && <span>Loading...</span>}
        {isErrorAddComment && (
          <span>An error occurred while adding the comment.</span>
        )}

        {comment && (
          <>
            {errors.comment && (
              <span className="text-red-500">{errors.comment.message}</span>
            )}
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
              <textarea
                autoFocus
                placeholder="type here ..."
                className="h-12 px-4 font-light border text-md rounded-t-md border-slate-300"
                {...register("comment")}
              />

              <button
                type="submit"
                className="h-12 px-8 font-normal text-white bg-blue-500 hover:opacity-80 rounded-b-md"
              >
                submit
              </button>
            </form>
          </>
        )}
      </div>
      {deleting ? (
        <div className="flex flex-col">
          <span className="mt-10 mb-5 text-red-600">
            Do you really want to delete the Favorite? Doing so will also delete
            the star rating and all comments.
          </span>
          <div className="flex gap-3">
            <button
              onClick={() => deleteFavorite(fav.imdbID)}
              className="h-12 px-8 text-white bg-red-600 rounded-md hover:bg-red-400"
            >
              yes, delete
            </button>
            <button
              onClick={() => setDeleting(false)}
              className="h-12 px-8 border rounded-md hover:bg-slate-100"
            >
              no
            </button>
            {isLoadingDeleteFavorite && <span>Loading...</span>}
            {isErrorDeleteFavorite && (
              <span>An error occurred while deleting the favorite.</span>
            )}
          </div>
        </div>
      ) : (
        <button
          onClick={() => setDeleting(true)}
          className="h-12 px-8 mt-10 text-white bg-red-600 rounded-md hover:bg-red-400"
        >
          delete favorite
        </button>
      )}
    </div>
  );
};
