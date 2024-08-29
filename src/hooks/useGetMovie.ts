import axios from "axios";
import { useQuery } from "react-query";

const getMovie = async (searchKey: string) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APIURL}?apikey=${
        import.meta.env.VITE_APIKEY
      }&s=${searchKey}`
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
