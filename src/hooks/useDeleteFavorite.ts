import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const deleteFavorite = async (imdbID: string) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/fav/${imdbID}`
    );
    return response.data;
  } catch (error) {
    throw new Error("error deleting favorite.");
  }
};

export const useDeleteFavorite = () => {
  const queryClient = useQueryClient();
  return useMutation((imdbID: string) => deleteFavorite(imdbID), {
    onSuccess: () => {
      queryClient.invalidateQueries("favorite");
    },
  });
};
