import { useSearchParams } from "react-router-dom";

const useActionSearchParams = ({ idKey = "id", addKey = "add", editKey = "edit" } = {}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isActive = [addKey, editKey].includes(searchParams.get("mode") ?? "");
  const isEdit = searchParams.get("mode") === editKey;
  const id = isEdit ? searchParams.get(idKey) : "";
  const clearActionParams = () => {
    searchParams.delete(idKey);
    searchParams.delete("mode");
    setSearchParams(searchParams);
  };
  return { id, isActive, isEdit, clearActionParams };
};
export default useActionSearchParams;
