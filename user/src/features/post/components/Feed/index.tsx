import SomethingWentWrong from "components/feedback/SomethingWentWrong";
import { CommentsDrawer } from "features/comment";
import { Post, postQueries } from "features/post";
import InfiniteScroll from "lib/infiniteScroll";
import { FC, useState } from "react";
import { PostCard } from "./PostCard";
export type FeedProps = {};
export const Feed: FC<FeedProps> = ({}) => {
  const query = postQueries.useInfinite({ limit: 10 });
  const [commentsPost, setCommentsPost] = useState<Post | null>(null);
  const [CommentsDrawerOpen, setCommentsDrawerOpen] = useState(false);
  return (
    <>
      <InfiniteScroll
        query={query}
        sx={{ gap: 1, width: { xs: 1, sm: 500 }, mx: "auto", py: 1, px: 1 }}
      >
        {query.data?.pages.map((page) =>
          page.data.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onCommentClick={() => {
                setCommentsDrawerOpen(true);
                setCommentsPost(post);
              }}
            />
          ))
        )}
        {query.isLoading && (
          <>
            <PostCard skeleton />
            <PostCard skeleton />
            <PostCard skeleton />
            <PostCard skeleton />
          </>
        )}
        {query.isError && <SomethingWentWrong />}
      </InfiniteScroll>
      <CommentsDrawer
        onClose={() => setCommentsPost(null)}
        open={CommentsDrawerOpen}
        setOpen={setCommentsDrawerOpen}
        post={commentsPost}
      />
    </>
  );
};
