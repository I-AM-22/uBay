import { VisibilityOff } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton, InputAdornment } from "@mui/material";
import TextField, { TextFieldProps } from "components/inputs/TextField";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
type Props = TextFieldProps<true | false>;
export const PasswordInput: FC<Props> = ({ ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation("common");
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
              sx={{ p: 0 }}
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
