import PersonIcon from "@mui/icons-material/Person";
import { InputAdornment } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import TextField, { TextFieldProps } from "./TextField";
type Props = TextFieldProps<true>;
const UsernameInput: FC<Props> = ({ control, name, ...props }) => {
  const { t } = useTranslation("auth");
  return (
    <TextField
      name={name}
      variant="outlined"
      control={control}
      label={t("login.username")}
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <PersonIcon />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default UsernameInput;
