import { useSearchParams } from "react-router-dom";

const useAddSearchParams = ({ addKey = "add" } = {}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isActive = addKey === searchParams.get("mode") ?? "";
  const clearAddParams = () => {
    searchParams.delete("mode");
    setSearchParams(searchParams);
  };
  return { isActive, clearAddParams };
};
export default useAddSearchParams;
