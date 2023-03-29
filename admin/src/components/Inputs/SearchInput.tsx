import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextFieldProps } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DebouncedTextField from "./DebouncedTextField";
type Props = {} & TextFieldProps;
const SearchInput: FC<Props> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  useEffect(() => {
    if (query) {
      searchParams.set("q", query);
    } else {
      searchParams.delete("q");
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
export default SearchInput;
