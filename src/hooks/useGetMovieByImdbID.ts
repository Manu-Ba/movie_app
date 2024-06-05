import axios from "axios";
import { useQuery } from "react-query";
import { apikey } from "../data/apikey";

const getMovieByID = async (imdbID: string) => {
  const apik = apikey;
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${apik}&i=${imdbID}`
    );
    console.log(response.data);
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
