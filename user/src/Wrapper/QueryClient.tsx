import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, ReactNode } from "react";
const queryClient = new QueryClient();
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
