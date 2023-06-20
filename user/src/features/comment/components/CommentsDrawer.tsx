import { Typography } from "@mui/material";
import { EdgeDrawer, EdgeDrawerProps } from "features/layout";
import { Post } from "features/post";
import { useIsDesktop } from "hooks/useIsDesktop";
import InfiniteScroll from "lib/infiniteScroll";
import { FC, useId } from "react";
import { useTranslation } from "react-i18next";
import { commentQueries } from "..";
import { CommentCard } from "./CommentCard";
import { CommentForm } from "./CommentForm";
export type CommentsDrawerProps = Omit<EdgeDrawerProps, "children"> & {
  post: Post | null;
  onClose: () => void;
};
export const CommentsDrawer: FC<CommentsDrawerProps> = ({ post, onClose, ...props }) => {
  const query = commentQueries.useInfinite({ postId: post?.id ?? "" });
  const isDesktop = useIsDesktop();
  const scrollId = useId();
  const { t } = useTranslation("comment");
  const handleCommentSubmit = () => {
    const commentList = document.getElementById(scrollId);
    if (commentList) commentList.scroll({ top: 0 });
  };
  return (
    <EdgeDrawer
      {...props}
      id={scrollId}
      onClose={onClose}
      title={
        <Typography variant="h6" sx={{ color: "primary.900", textAlign: "center" }}>
          {t("comments")}
        </Typography>
      }
      sx={{
        ".MuiDrawer-paper": {
          width: isDesktop ? 400 : 1,
          pb: 5,
          pt: 1,
        },
      }}
    >
      <InfiniteScroll
        scrollElement={scrollId}
        sx={{
          gap: 1,
          p: 2,
        }}
        query={query}
      >
        {query.isSuccess &&
          query.data.pages.map((page) =>
            page.data.map((comment) => <CommentCard key={comment.id} comment={comment} />)
          )}
        {query.isInitialLoading && (
          <>
            <CommentCard skeleton />
            <CommentCard skeleton />
            <CommentCard skeleton />
            <CommentCard skeleton />
            <CommentCard skeleton />
            <CommentCard skeleton />
          </>
        )}
      </InfiniteScroll>
      {post && <CommentForm onCommentSubmit={handleCommentSubmit} postId={post?.id} />}
    </EdgeDrawer>
  );
};
