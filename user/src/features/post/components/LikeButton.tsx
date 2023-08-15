import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { Button } from "@mui/material";
import { UseInfiniteQueryResult, useQueryClient } from "@tanstack/react-query";
import { queryStore } from "features/shared";
import { FC } from "react";
import { APIList } from "types/api";
import { Post, postQueries } from "..";
export type LikeButtonProps = { postId: string; isLiked: boolean };
export const LikeButton: FC<LikeButtonProps> = ({ isLiked, postId }) => {
  const like = postQueries.useLike();
  const unlike = postQueries.useUnlike();
  const queryClient = useQueryClient();
  const handleClick = () => {
    const newLikeState = !isLiked;
    queryClient.setQueriesData(
      queryStore.post.all._def,
      (posts: UseInfiniteQueryResult<APIList<Post>>["data"]) => {
        if (!posts) return;
        return {
          ...posts,
          pages: [
            ...posts.pages.map((page) => {
              return {
                ...page,
                data: page.data.map((post) => {
                  if (post._id === postId) {
                    return {
                      ...post,
                      likedByMe: newLikeState,
                      likes: newLikeState ? post.likes + 1 : post.likes - 1,
                    };
                  }
                  return { ...post };
                }),
              };
            }),
          ],
        };
      }
    );
    queryClient.setQueryData(queryStore.post.detail(postId).queryKey, (post: Post | undefined) => {
      if (!post) return;
      return {
        ...post,
        likedByMe: newLikeState,
        likes: newLikeState ? post.likes + 1 : post.likes - 1,
      };
    });
    (isLiked ? unlike : like).mutate(postId, {
      onSettled: () => {
        queryClient.invalidateQueries(queryStore.post.all._def);
        queryClient.invalidateQueries(queryStore.post.detail(postId));
      },
    });
  };
  return (
    <Button onClick={handleClick}>{isLiked ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}</Button>
  );
};
