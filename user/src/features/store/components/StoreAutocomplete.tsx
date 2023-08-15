import { Autocomplete, AutocompleteProps } from "@mui/material";
import Loading from "components/feedback/Loading";
import AutocompleteControl, {
  AutocompleteControlProps,
} from "components/selects/AutocompleteControl";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { storeQueries } from "..";
import { StoreSelect } from "../api/type";
type Props = Omit<AutocompleteProps<StoreSelect, false, false, false>, "options" | "renderInput"> &
  Omit<AutocompleteControlProps, "children">;
export const StoreAutocomplete: FC<Props> = ({ name, control, label, ...props }) => {
  const { t } = useTranslation();
  const { data, isLoading } = storeQueries.useSelect();
  return (
    <AutocompleteControl control={control} label={label} name={name}>
      <Autocomplete
        isOptionEqualToValue={(option, value) => option._id === value._id}
        {...props}
        loading={isLoading}
        options={data ?? []}
        getOptionLabel={(option) => `${option.name} - ${option.city.name}`}
        renderInput={() => null}
        renderOption={(props, option) => (
          <li {...props} key={option._id}>{`${option.name} - ${option.city.name}`}</li>
        )}
        loadingText={<Loading />}
        noOptionsText={t("error.noData")}
      />
    </AutocompleteControl>
  );
};
