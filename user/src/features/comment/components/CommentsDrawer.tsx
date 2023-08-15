import AddCommentTwoToneIcon from "@mui/icons-material/AddCommentTwoTone";
import { Stack, Typography } from "@mui/material";
import { DiscountDialog } from "features/discount";
import { EdgeDrawer, EdgeDrawerProps } from "features/layout";
import { Post } from "features/post";
import { useIsDesktop } from "hooks/useIsDesktop";
import InfiniteScroll from "lib/infiniteScroll";
import { FC, useEffect, useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { Comment, commentQueries } from "..";
import { CommentCard } from "./CommentCard";
import { CommentForm } from "./CommentForm";
export type CommentsDrawerProps = Omit<EdgeDrawerProps, "children"> & {
  post: Post | null;
};
export const CommentsDrawer: FC<CommentsDrawerProps> = ({ post, ...props }) => {
  const query = commentQueries.useInfinite({ postId: props.open ? post?._id ?? "" : "" });
  const [userForDiscount, setUserForDiscount] = useState<Comment["user"] | null>(null);
  const isDesktop = useIsDesktop();
  const scrollId = useId();
  const [height, setHeight] = useState(window.innerHeight);
  const { t } = useTranslation("comment");
  const isEmpty = query.isSuccess && query.data.pages[0].data.length === 0;
  const handleCommentSubmit = () => {
    const commentList = document.getElementById(scrollId);
    if (commentList) commentList.scroll({ top: 0 });
  };
  const handleDiscount = (comment: Comment) => {
    setUserForDiscount(comment.user);
  };
  useEffect(() => {
    const listener = function () {
      setHeight(window.visualViewport?.height ?? window.innerHeight);
    };
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, []);

  return (
    <>
      <EdgeDrawer
        {...props}
        id={scrollId}
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
              page.data.map((comment) => (
                <CommentCard
                  postAuthorId={post?.user._id ?? ""}
                  onDiscount={() => handleDiscount(comment)}
                  key={comment._id}
                  comment={comment}
                />
              ))
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
        {post && <CommentForm onCommentSubmit={handleCommentSubmit} postId={post?._id} />}
      </EdgeDrawer>
      <DiscountDialog post={post} user={userForDiscount} onClose={() => setUserForDiscount(null)} />
    </>
  );
};
