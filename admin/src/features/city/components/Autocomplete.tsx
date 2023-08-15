import { Autocomplete as MuiAutocomplete, AutocompleteProps as MuiProps } from "@mui/material";
import Loading from "components/feedback/Loading";
import Control, {
  AutocompleteControlProps as ControlProps,
} from "components/selects/AutocompleteControl";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { cityQueries } from "..";
import { CitySelect } from "../api/type";
export type AutocompleteProps = Omit<
  MuiProps<CitySelect, false, false, false>,
  "options" | "renderInput"
> &
  Omit<ControlProps, "children">;
export const Autocomplete: FC<AutocompleteProps> = ({
  name,
  control,
  label,
  required,
  ...props
}) => {
  const { t } = useTranslation();
  const { data, isLoading } = cityQueries.useSelect();
  return (
    <Control control={control} label={label} name={name} required={required}>
      <MuiAutocomplete
        isOptionEqualToValue={(option, value) => option._id === value._id}
        {...props}
        loading={isLoading}
        options={data ?? []}
        getOptionLabel={(option) => option.name}
        renderInput={() => null}
        renderOption={(props, option) => (
          <li {...props} key={option._id}>
            {option.name}
          </li>
        )}
        loadingText={<Loading />}
        noOptionsText={t("error.noData")}
      />
    </Control>
  );
};
