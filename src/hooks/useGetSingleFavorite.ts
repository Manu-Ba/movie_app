import axios from "axios";
import { useQuery } from "react-query";

const getSingleFavorite = async (imdbID: string) => {
  try {
    const response = await axios.get(`http://localhost:3000/api/fav/${imdbID}`);
    return response.data;
  } catch (error) {
    throw new Error("error fetching favorite.");
  }
};

export const useGetSingleFavorite = (imdbID: string) =>
  useQuery({
    queryKey: ["favorite", imdbID],
    queryFn: () => getSingleFavorite(imdbID),
  });
