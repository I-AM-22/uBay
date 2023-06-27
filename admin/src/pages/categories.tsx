import { Grid, Stack } from "@mui/material";
import AddFab from "components/buttons/AddFab";
import SearchFilter from "components/inputs/SearchFilter";
import FilterRow from "components/layout/FilterRow";
import {
  CategoriesTable,
  CategoryAddForm,
  CategoryEditForm,
  CategoryRemoveForm,
} from "features/category";
import { FC } from "react";
export const CategoriesPage: FC<{}> = ({}) => {
  return (
    <Stack gap={1}>
      <FilterRow>
        <Grid item xs={8} sm={6} md={4} lg={3}>
          <SearchFilter />
        </Grid>
      </FilterRow>
      <CategoriesTable />
      <AddFab />
      <CategoryEditForm />
      <CategoryAddForm />
      <CategoryRemoveForm />
    </Stack>
  );
};
