import axios from "axios";
import { useQuery } from "react-query";

const getAllFavorites = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/api/fav`);
    return response.data;
  } catch (error) {
    throw new Error("error fetching favorites.");
  }
};

export const useGetAllFavorites = () => useQuery("favorite", getAllFavorites);
