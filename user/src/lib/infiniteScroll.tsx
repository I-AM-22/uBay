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
  scrollElement?: ReactNode;
} & StackProps;
const InfiniteScroll: FC<Props> = ({ query, children, loader, scrollElement, ...props }) => {
  const { fetchNextPage, hasNextPage, data, isSuccess } = query;
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.innerHeight > (ref.current?.scrollHeight ?? 0) && query.data) {
      query.fetchNextPage();
    }
  }, [query]);

  return (
    <Infinite
      style={{ overflow: "visible" }}
      dataLength={isSuccess ? data.pages.length * data.pages[0].data.length : 0}
      next={fetchNextPage}
      hasMore={hasNextPage ?? false}
      loader={loader ?? <Loading size={40} my={1} />}
      scrollableTarget={scrollElement}
    >
      <Stack ref={ref} {...props} component={"div"}>
        {children}
      </Stack>
    </Infinite>
  );
};
export default InfiniteScroll;
