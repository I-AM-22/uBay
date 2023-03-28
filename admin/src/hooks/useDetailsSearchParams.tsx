import { useSearchParams } from "react-router-dom";

const useDetailsSearchParams = ({ idKey = "id", detailsKey = "details" } = {}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const isActive = searchParams.get("mode") === detailsKey;
  const id = isActive ? searchParams.get(idKey) ?? "" : "";
  const clearDetailsParams = () => {
    searchParams.delete(idKey);
    searchParams.delete("mode");
    setSearchParams(searchParams);
  };
  return { id, isActive, clearDetailsParams };
};
export default useDetailsSearchParams;
