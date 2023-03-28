import { MenuItem } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { enumToNumberArray } from "utils/transforms";
import { Select, SelectProps } from "./Select";
type SelectEnumProps = { _enum: { [key: string]: any }; translationPrefix: string } & SelectProps;
export const SelectEnum: FC<SelectEnumProps> = ({ _enum, translationPrefix, ...props }) => {
  const { t } = useTranslation();
  const arr = enumToNumberArray(_enum);
  return (
    <Select {...props}>
      {arr.map((item) => (
        <MenuItem value={item} key={item}>
          {t(`${translationPrefix}.${_enum[item]}`)}
        </MenuItem>
      ))}
    </Select>
  );
};
export default SelectEnum;
