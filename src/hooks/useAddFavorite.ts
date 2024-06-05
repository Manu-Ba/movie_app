import axios from "axios";
import { useQueryClient, useMutation } from "react-query";

const addFavorite = async (imdbID: string) => {
  try {
    const response = await axios.post(`http://localhost:3000/api/fav`, {
      imdbID: imdbID,
    });
    return response.data;
  } catch (error) {
    throw new Error("Error adding favorite.");
  }
};

export const useAddFavorite = () => {
  const queryClient = useQueryClient();
  return useMutation((imdbID: string) => addFavorite(imdbID), {
    onSuccess: () => {
      queryClient.invalidateQueries("favorite");
    },
  });
};
