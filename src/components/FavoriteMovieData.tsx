import { useDeleteFavorite } from "../hooks/useDeleteFavorite";
import { favoriteMovieType } from "../types/type";

type FavoriteMovieDataProps = {
  fav: favoriteMovieType;
};

export const FavoriteMovieData = ({ fav }: FavoriteMovieDataProps) => {
  const { mutate: deleteFavorite } = useDeleteFavorite();
  return (
    <div>
      <div>Star Rating: {fav.starRating}</div>
      <div>
        <h1>Comments:</h1>
        {
          <div className="flex flex-col">
            {fav.comments.map((comment: string, index: number) => (
              <span key={index}>{comment}</span>
            ))}
          </div>
        }
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
