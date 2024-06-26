import axios from "axios";
import { useQuery } from "react-query";
import { apikey } from "../data/apikey";

const getMovie = async (searchKey: string) => {
  const apik = apikey;
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${apik}&s=${searchKey}`
    );
    return response.data;
  } catch (error) {
    throw new Error("error fetching movie");
  }
};

export const useGetMovie = (searchKey: string) =>
  useQuery({
    queryKey: ["movie", searchKey],
    queryFn: () => getMovie(searchKey),
  });
