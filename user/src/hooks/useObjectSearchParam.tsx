import { useSearchParams } from "react-router-dom";
function useObjectSearchParam<T>(key: string) {
  const [searchParams] = useSearchParams();
  try {
    const string = searchParams.get(key);
    const object = (string && (JSON.parse(string) as T)) || null;
    return object;
  } catch (err) {
    return null;
  }
}
export default useObjectSearchParam;
