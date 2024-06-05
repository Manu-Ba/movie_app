import axios from "axios";
import { useQueryClient, useMutation } from "react-query";

type EditCommentDataType = {
  imdbID: string;
  commentID: number;
  comment: string;
};

const editComment = async (editCommentData: EditCommentDataType) => {
  try {
    const response = await axios.patch(
      `http://localhost:3000/api/fav/${editCommentData.imdbID}/comment/${editCommentData.commentID}`,
      {
        comment: editCommentData.comment,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Error editing comment.");
  }
};

export const useEditComment = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (editCommentData: EditCommentDataType) => editComment(editCommentData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("favorite");
      },
    }
  );
};
