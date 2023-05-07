import { useSearchParams } from "react-router-dom";

const useRemoveSearchParams = (idKey = "id", removeKey = "remove") => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isActive = searchParams.get("mode") === removeKey;
  const id = searchParams.get(idKey);
  const clearRemoveParams = () => {
    searchParams.delete(idKey);
    searchParams.delete("mode");
    setSearchParams(searchParams);
  };
  return { id, isActive, clearRemoveParams };
};
export default useRemoveSearchParams;
