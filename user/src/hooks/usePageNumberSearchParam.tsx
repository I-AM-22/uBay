import { useSearchParams } from "react-router-dom";

function usePageNumberSearchParam(key = "p") {
  const [searchParams] = useSearchParams();
  try {
    const pageNumber = Number(searchParams.get(key) ?? 0);
    return pageNumber;
  } catch (err) {
    return 0;
  }
}
export default usePageNumberSearchParam;
