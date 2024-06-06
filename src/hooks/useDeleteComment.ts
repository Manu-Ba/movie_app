import axios from "axios";
import { useQueryClient, useMutation } from "react-query";

type DeleteCommentDataType = {
  imdbID: string;
  commentID: number;
};

const deleteComment = async (deleteCommentData: DeleteCommentDataType) => {
  console.log(deleteCommentData.commentID);
  try {
    const response = await axios.patch(
      `http://localhost:3000/api/fav/${deleteCommentData.imdbID}/comments`,
      {
        commentID: deleteCommentData.commentID,
      }
    );
    console.log("here. - not going here for some reason...");
    return response.data;
  } catch (error) {
    throw new Error("Error deleting comment.");
  }
};

export const useDeleteComment = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (deleteCommentData: DeleteCommentDataType) =>
      deleteComment(deleteCommentData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("favorite");
      },
    }
  );
};
