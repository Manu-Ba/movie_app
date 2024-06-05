import axios from "axios";
import { useQueryClient, useMutation } from "react-query";

type RateMovieDataType = {
  imdbID: string;
  rating: number;
};

const rateMovie = async (rateMovieData: RateMovieDataType) => {
  try {
    const response = await axios.patch(
      `http://localhost:3000/api/fav/${rateMovieData.imdbID}`,
      {
        rating: rateMovieData.rating,
      }
    );
    console.log("rating movie...");
    return response.data;
  } catch (error) {
    throw new Error("Error rating movie.");
  }
};

export const useRateMovie = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (rateMovieData: RateMovieDataType) => rateMovie(rateMovieData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("favorite");
      },
    }
  );
};
