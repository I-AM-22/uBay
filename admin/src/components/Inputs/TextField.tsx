import {
  styled,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import { Control, Controller } from "react-hook-form";
const TextFieldStyled = styled(MuiTextField, {
  shouldForwardProp: (prop) => prop !== "required",
})(({ required, theme }) => ({
  paddingLeft: 3,
  "label::after": {
    content: required ? '"*"' : '""',
    padding: "1px",
    color: theme.palette.error.main,
  },
}));
export type TextFieldProps<controlled extends boolean = false> = MuiTextFieldProps &
  (controlled extends true
    ? {
        name: string;
        control: Control<any>;
      }
    : { control?: undefined });

export const TextField = ({ control, name, ...props }: TextFieldProps<true | false>) => {
  if (control) {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextFieldStyled
            fullWidth
            error={!!error}
            helperText={error && error.message}
            {...field}
            {...props}
          />
        )}
      />
    );
  }
  return <TextFieldStyled fullWidth {...props} />;
};
export default TextField;
