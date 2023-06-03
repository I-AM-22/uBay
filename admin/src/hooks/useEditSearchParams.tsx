import { useSearchParams } from "react-router-dom";

const useEditSearchParams = ({ idKey = "id", editKey = "edit" } = {}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isActive = editKey === (searchParams.get("mode") ?? "");
  const id = searchParams.get(idKey)??undefined;
  const clearEditParams = () => {
    searchParams.delete(idKey);
    searchParams.delete("mode");
    setSearchParams(searchParams);
  };
  return { id, isActive, clearEditParams };
};
export default useEditSearchParams;
