import { VisibilityOff } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton, InputAdornment } from "@mui/material";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import TextField, { TextFieldProps } from "./TextField";
type Props = TextFieldProps<true | false>;
const PasswordInput: FC<Props> = ({ ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation("auth", { keyPrefix: "login" });
  return (
    <TextField
      label={t("password")}
      type={showPassword ? "text" : "password"}
      onInput={(e) => {
        const input = e.target as HTMLInputElement;
        input.value = input.value.trim();
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
            >
              {showPassword ? <VisibilityOff /> : <VisibilityIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};
export default PasswordInput;