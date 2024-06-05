import axios from "axios";
import { useQueryClient, useMutation } from "react-query";

type AddCommentDataType = {
  imdbID: string;
  comment: string;
};

const addComment = async (addCommentData: AddCommentDataType) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/api/fav/${addCommentData.imdbID}/comment`,
      {
        comment: addCommentData.comment,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Error adding comment.");
  }
};

export const useAddComment = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (addCommentData: AddCommentDataType) => addComment(addCommentData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("favorite");
      },
    }
  );
};
