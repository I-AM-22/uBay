import { useSearchParams } from "react-router-dom";

function useNumberEnumSearchParam<EnumType>(key: string) {
  const [searchParams] = useSearchParams();
  const enumString = searchParams.get(key);
  const enumValue = enumString ? (Number(enumString) as EnumType) : null;
  return enumValue;
}
export default useNumberEnumSearchParam;
