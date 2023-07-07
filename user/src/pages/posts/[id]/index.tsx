import SomethingWentWrong from "components/feedback/SomethingWentWrong";
import { PostDetails, postQueries } from "features/post";
import { FC } from "react";
import { useParams } from "react-router-dom";
export type PostPageProps = {};
export const PostPage: FC<PostPageProps> = ({}) => {
  const { id = "" } = useParams();
  const query = postQueries.useDetails(id);
  return (
    <>
      {query.isSuccess && <PostDetails post={query.data} />}
      {query.isInitialLoading && <PostDetails skeleton />}
      {query.isError && <SomethingWentWrong />}
    </>
  );
};
