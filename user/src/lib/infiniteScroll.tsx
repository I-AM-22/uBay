import { Stack, StackProps } from "@mui/material";
import { UseInfiniteQueryResult } from "@tanstack/react-query";
import Loading from "components/feedback/Loading";
import { FC, ReactNode, useEffect, useRef } from "react";
import Infinite from "react-infinite-scroll-component";
import { APIList } from "types/api";

type Props = {
  loader?: ReactNode;
  children: ReactNode;
  query: UseInfiniteQueryResult<APIList<unknown>, unknown>;
} & StackProps;
const InfiniteScroll: FC<Props> = ({ query, children, loader, ...props }) => {
  const { fetchNextPage, hasNextPage, data, isSuccess } = query;
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.innerHeight > (ref.current?.scrollHeight ?? 0)) {
      query.fetchNextPage();
    }
  }, [query]);

  return isSuccess ? (
    <Infinite
      style={{ overflow: "visible" }}
      dataLength={data.pages.length * data.pages[0].data.length}
      next={fetchNextPage}
      hasMore={hasNextPage ?? false}
      loader={loader ?? <Loading size={40} my={2} />}
    >
      <Stack ref={ref} {...props} component={"div"}>
        {children}
      </Stack>
    </Infinite>
  ) : (
    <>{loader}</> ?? <Loading size={40} mt={3} />
  );
};
export default InfiniteScroll;
