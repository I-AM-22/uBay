import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { Button } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { queryStore } from "features/shared";
import { FC } from "react";
import { postQueries } from "..";
export type LikeButtonProps = { postId: string; isLiked: boolean };
export const LikeButton: FC<LikeButtonProps> = ({ isLiked, postId }) => {
  const like = postQueries.useLike();
  const unlike = postQueries.useUnlike();
  const queryClient = useQueryClient();
  const handleClick = () => {
    queryClient.setQueriesData(queryStore.post.all._def, (posts) => {
      console.log(posts);
      return posts;
    });
    (isLiked ? unlike : like).mutate(postId, {
      onSuccess: () => {
        queryClient.invalidateQueries(queryStore.post.all._def);
        queryClient.invalidateQueries(queryStore.post.detail(postId));
      },
      onError: () => {},
    });
  };
  return (
    <Button onClick={handleClick}>{isLiked ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}</Button>
  );
};
