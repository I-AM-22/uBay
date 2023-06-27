import MailIcon from "@mui/icons-material/Mail";
import { InputAdornment } from "@mui/material";
import TextField, { TextFieldProps } from "components/inputs/TextField";
import { FC } from "react";
import { useTranslation } from "react-i18next";
type Props = TextFieldProps<true>;
export const EmailInput: FC<Props> = ({ control, name, ...props }) => {
  const { t } = useTranslation("common");
  return (
    <TextField
      name={name}
      variant="outlined"
      control={control}
      label={t("email")}
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <MailIcon />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default EmailInput;
