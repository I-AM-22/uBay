import { Autocomplete, AutocompleteProps } from "@mui/material";
import Loading from "components/feedback/Loading";
import AutocompleteControl, {
  AutocompleteControlProps,
} from "components/selects/AutocompleteControl";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { categoryQueries } from "..";
import { CategorySelect } from "../api/type";
type Props = Omit<
  AutocompleteProps<CategorySelect, false, false, false>,
  "options" | "renderInput"
> &
  Omit<AutocompleteControlProps, "children">;
export const CategoryAutocomplete: FC<Props> = ({ name, control, label, ...props }) => {
  const { t } = useTranslation();
  const { data, isLoading } = categoryQueries.useSelect();
  return (
    <AutocompleteControl control={control} label={label} name={name}>
      <Autocomplete
        isOptionEqualToValue={(option, value) => option.id === value.id}
        {...props}
        loading={isLoading}
        options={data ?? []}
        getOptionLabel={(option) => option.name}
        renderInput={() => null}
        renderOption={(props, option) => (
          <li {...props} key={option.id}>
            {option.name}
          </li>
        )}
        loadingText={<Loading />}
        noOptionsText={t("error.noData")}
      />
    </AutocompleteControl>
  );
};
