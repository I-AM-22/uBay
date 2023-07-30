import AddCommentTwoToneIcon from "@mui/icons-material/AddCommentTwoTone";
import { Stack, Typography } from "@mui/material";
import { EdgeDrawer, EdgeDrawerProps } from "features/layout";
import { Post } from "features/post";
import { useIsDesktop } from "hooks/useIsDesktop";
import InfiniteScroll from "lib/infiniteScroll";
import { FC, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { commentQueries } from "..";
import { CommentCard } from "./CommentCard";
import { CommentForm } from "./CommentForm";
export type CommentsDrawerProps = Omit<EdgeDrawerProps, "children"> & {
  post: Post | null;
  onClose: () => void;
};
export const CommentsDrawer: FC<CommentsDrawerProps> = ({ post, onClose, ...props }) => {
  const query = commentQueries.useInfinite({ postId: props.open ? post?.id ?? "" : "" });
  const isDesktop = useIsDesktop();
  const scrollId = useId();
  const [height, setHeight] = useState(window.innerHeight);
  const { t } = useTranslation("comment");
  const isEmpty = query.isSuccess && query.data.pages[0].data.length === 0;
  const handleCommentSubmit = () => {
    const commentList = document.getElementById(scrollId);
    if (commentList) commentList.scroll({ top: 0 });
  };
  console.log(height);

  window.addEventListener("resize", function () {
    setHeight(window.visualViewport?.height ?? this.window.innerHeight);
  });
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
          height: height,
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
          height: 1,
        }}
        query={query}
      >
        {isEmpty && (
          <Stack alignItems={"center"} mt="auto">
            <AddCommentTwoToneIcon sx={{ color: "", fontSize: 200 }} />
            <Typography color="#444" fontSize="clamp(17px,4vw,23px)">
              {t("empty")}
            </Typography>
          </Stack>
        )}
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
