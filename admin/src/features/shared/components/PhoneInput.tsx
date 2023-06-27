import PhoneIcon from "@mui/icons-material/Phone";
import { InputAdornment } from "@mui/material";
import TextField, { TextFieldProps } from "components/inputs/TextField";
import { FC } from "react";
import { useTranslation } from "react-i18next";
type Props = TextFieldProps<true>;
export const PhoneInput: FC<Props> = ({ control, name, ...props }) => {
  const { t } = useTranslation("common");
  return (
    <TextField
      name={name}
      variant="outlined"
      control={control}
      label={t("phone")}
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <PhoneIcon />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default PhoneInput;
