import { useSearchParams } from "react-router-dom";

function useQuerySearchParam(key = "q") {
  const [searchParams] = useSearchParams();
  try {
    const query = searchParams.get(key) ?? "";
    return query;
  } catch (err) {
    return "";
  }
}
export default useQuerySearchParam;
