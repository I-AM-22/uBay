import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextFieldProps } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DebouncedTextField from "./DebouncedTextField";
type Props = {} & TextFieldProps;
const SearchFilter: FC<Props> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("s") ?? "");
  useEffect(() => {
    if (query) {
      searchParams.set("s", query);
    } else {
      searchParams.delete("s");
    }
    setSearchParams(searchParams);
  }, [query, searchParams, setSearchParams]);
  return (
    <DebouncedTextField
      initial={query}
      clearable
      setDebounced={setQuery}
      size={"small"}
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};
export default SearchFilter;
