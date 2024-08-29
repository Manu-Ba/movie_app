import axios from "axios";
import { useQuery } from "react-query";

const getMovieByID = async (imdbID: string) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APIURL}?apikey=${
        import.meta.env.VITE_APIKEY
      }&i=${imdbID}`
    );
    return response.data;
  } catch (error) {
    throw new Error("error fetching movie");
  }
};

export const useGetMovieByImdbID = (imdbID: string) =>
  useQuery({
    queryKey: ["movieByID", imdbID],
    queryFn: () => getMovieByID(imdbID),
  });
