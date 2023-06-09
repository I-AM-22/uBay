import { useSearchParams } from "react-router-dom";

interface HandleChangeProps {
  pages?: any[];
  fetchPreviousPage: () => Promise<any>;
  fetchNextPage: () => Promise<any>;
}
export const useHandlePageChange = ({
  fetchNextPage,
  fetchPreviousPage,
  pages,
}: HandleChangeProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return async function (_: any, newPage: number) {
    const currentPage = Number(searchParams.get("p") ?? 0);
    if (newPage === 0) searchParams.delete("p");
    else searchParams.set("p", newPage.toString());
    setSearchParams(searchParams);
    if (currentPage > newPage && !pages?.[newPage]) {
      await fetchPreviousPage();
    } else if (currentPage < newPage && !pages?.[newPage]) {
      await fetchNextPage();
    }
  };
};
