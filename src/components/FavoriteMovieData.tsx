import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useDeleteFavorite } from "../hooks/useDeleteFavorite";
import { useRateMovie } from "../hooks/useRateMovie";
import { favoriteMovieType } from "../types/type";
import { useAddComment } from "../hooks/useAddComment";
import { useEditComment } from "../hooks/useEditComment";
import { useDeleteComment } from "../hooks/useDeleteComment";

type FavoriteMovieDataProps = {
  fav: favoriteMovieType;
};

type Inputs = {
  comment: string;
};

const schema = yup.object().shape({
  comment: yup.string().required("*"),
});

export const FavoriteMovieData = ({ fav }: FavoriteMovieDataProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const { mutate: deleteFavorite } = useDeleteFavorite();
  const { mutate: rateMovie } = useRateMovie();
  const { mutate: addComment } = useAddComment();
  const { mutate: editComment } = useEditComment();
  const { mutate: deleteComment } = useDeleteComment();

  const [rate, setRate] = useState(false);
  const [comment, setComment] = useState(false);

  const starRateMovie = (rating: number) => {
    rateMovie({ imdbID: fav.imdbID, rating: rating });
    setRate(false);
  };

  const onSubmit = (data: Inputs) => {
    addComment({ imdbID: fav.imdbID, comment: data.comment });
    setComment(false);
  };

  const editCom = (commentIndex: number) => {
    let editCommentData = {
      imdbID: fav.imdbID,
      commentID: commentIndex,
      comment: "edited test comment.",
    };
    editComment(editCommentData);
  };

  const deleteCom = (commentIndex: number) => {
    let deleteCommentData = {
      imdbID: fav.imdbID,
      commentID: commentIndex,
    };
    deleteComment(deleteCommentData);
  };

  return (
    <div>
      <div>
        {rate ? (
          <>
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
          </>
        ) : (
          <span>Star Rating: {fav.starRating}</span>
        )}
        <button
          onClick={() => setRate(!rate)}
          className="h-12 px-8 border rounded-md hover:bg-slate-100"
        >
          rate movie
        </button>
      </div>
      <div>
        <h1>Comments:</h1>
        {
          <div className="flex flex-col">
            {fav.comments.map((comment: string, index: number) => (
              <span key={index}>
                {comment} <button onClick={() => editCom(index)}>✎</button>{" "}
                <button onClick={() => deleteCom(index)}>❌</button>
              </span>
            ))}
          </div>
        }
        <button
          onClick={() => setComment(!comment)}
          className="h-12 px-8 border rounded-md hover:bg-slate-100"
        >
          add comment
        </button>
        {comment && (
          <form className="flex" onSubmit={handleSubmit(onSubmit)}>
            <textarea
              placeholder="type here ..."
              className="h-12 px-4 font-light border text-md rounded-l-md border-slate-300"
              {...register("comment")}
            />

            <button
              type="submit"
              className="h-12 px-8 font-normal text-white bg-blue-500 rounded-r-md"
            >
              submit
            </button>
          </form>
        )}
      </div>
      <button
        onClick={() => deleteFavorite(fav.imdbID)}
        className="h-12 px-8 border rounded-md hover:bg-slate-100"
      >
        delete favorite
      </button>
    </div>
  );
};

// this movie is a favorite.{fav.imdbID}
