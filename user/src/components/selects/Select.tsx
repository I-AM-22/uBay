import CloseIcon from "@mui/icons-material/Close";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Select as MuiSelect,
  SelectProps as Props,
} from "@mui/material";
export type SelectProps = {
  onClear?: () => void;
} & Props;
export function Select({ onChange, value, label, size, onClear, ...props }: SelectProps) {
  return (
    <FormControl fullWidth size={size}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        value={value}
        label={label}
        onChange={onChange}
        endAdornment={
          onClear &&
          value !== "" && (
            <InputAdornment position="end" sx={{ position: "absolute", right: 28 }}>
              <IconButton onClick={onClear} size="small">
                <CloseIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </InputAdornment>
          )
        }
        {...props}
      />
    </FormControl>
  );
}
