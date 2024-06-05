export type favoriteMovieType = {
  id: number;
  imdbID: string;
  isFavorite: boolean;
  starRating: string;
  comments: string[];
};

export type MovieType = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};
