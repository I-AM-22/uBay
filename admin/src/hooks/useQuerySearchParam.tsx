import { useSearchParams } from "react-router-dom";

function useQuerySearchParam(key = "s") {
  const [searchParams] = useSearchParams();
  try {
    const query = searchParams.get(key) ?? "";
    return query;
  } catch (err) {
    return "";
  }
}
export default useQuerySearchParam;
