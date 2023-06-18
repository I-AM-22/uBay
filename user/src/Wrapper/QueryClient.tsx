import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, ReactNode } from "react";
import { APIList } from "types/api";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000,
      getNextPageParam: (lp, allPages) => {
        {
          const lastPage = lp as APIList<unknown>;
          return allPages.length < lastPage.totalPages ? lastPage.pageNumber + 1 : undefined;
        }
      },
      getPreviousPageParam: (fp, allPages) => {
        const firstPage = fp as APIList<unknown>;

        return allPages.length > 0 ? firstPage.pageNumber - 1 : undefined;
      },
    },
  },
});
type Props = { children: ReactNode };
const QueryClientContext: FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools
        initialIsOpen={false}
        toggleButtonProps={{ style: { width: "1.5rem", position: "fixed", bottom: 0, right: 0 } }}
      /> */}
      {children}
    </QueryClientProvider>
  );
};
export default QueryClientContext;
