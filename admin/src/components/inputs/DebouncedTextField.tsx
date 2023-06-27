import CloseIcon from "@mui/icons-material/Close";
import { IconButton, InputAdornment } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import TextField, { TextFieldProps } from "./TextField";
type Props = {
  debounceBy?: number;
  setDebounced: Dispatch<SetStateAction<string>>;
  initial?: string;
  clearable?: boolean;
} & TextFieldProps;
function DebouncedTextField({
  debounceBy = 500,
  setDebounced,
  initial = "",
  clearable = false,
  ...props
}: Props) {
  const [valueBeforeDebounce, setValueBeforeDebounce] = useState(initial);
  const debouncedValue = useDebounce(valueBeforeDebounce, debounceBy);
  useEffect(() => {
    setDebounced(debouncedValue);
  }, [debouncedValue, setDebounced]);
  return (
    <TextField
      value={valueBeforeDebounce}
      onChange={(e) => setValueBeforeDebounce(e.target.value)}
      {...props}
      InputProps={{
        endAdornment: clearable && valueBeforeDebounce && (
          <InputAdornment position="end">
            <IconButton
              onClick={() => {
                setValueBeforeDebounce("");
              }}
              size="small"
            >
              <CloseIcon />
            </IconButton>
          </InputAdornment>
        ),
        startAdornment: props.InputProps?.startAdornment,
      }}
    />
  );
}
export default DebouncedTextField;
