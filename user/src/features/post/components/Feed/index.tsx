import { postQueries } from "features/post";
import InfiniteScroll from "lib/infiniteScroll";
import { FC } from "react";
import { PostCard } from "./PostCard";
export type FeedProps = {};
export const Feed: FC<FeedProps> = ({}) => {
  const query = postQueries.useInfinite({ limit: 10 });
  return (
    <InfiniteScroll
      query={query}
      sx={{ gap: 1, width: { xs: 1, sm: 500 }, mx: "auto", py: 1, px: 1 }}
    >
      {query.data?.pages.map((page) =>
        page.data.map((post) => <PostCard key={post.id} post={post} />)
      )}
      {query.isInitialLoading && (
        <>
          <PostCard skeleton />
          <PostCard skeleton />
          <PostCard skeleton />
          <PostCard skeleton />
        </>
      )}
    </InfiniteScroll>
  );
};
