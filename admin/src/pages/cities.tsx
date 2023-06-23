import { Grid, Stack } from "@mui/material";
import SearchFilter from "components/Inputs/SearchFilter";
import AddFab from "components/buttons/AddFab";
import FilterRow from "components/layout/FilterRow";
import { CitiesTable, CityAddForm, CityEditForm, CityRemoveForm } from "features/city";
import { FC } from "react";
export const CitiesPage: FC<{}> = ({}) => {
  return (
    <Stack gap={1}>
      <FilterRow>
        <Grid item xs={8} sm={6} md={4} lg={3}>
          <SearchFilter />
        </Grid>
      </FilterRow>
      <CitiesTable />
      <AddFab />
      <CityAddForm />
      <CityEditForm />
      <CityRemoveForm />
    </Stack>
  );
};
