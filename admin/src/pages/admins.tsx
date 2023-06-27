import { Grid, Stack } from "@mui/material";
import AddFab from "components/buttons/AddFab";
import SearchFilter from "components/inputs/SearchFilter";
import FilterRow from "components/layout/FilterRow";
import { AdminAddForm, AdminEditForm, AdminRemoveForm, AdminsTable } from "features/admin";
import { FC } from "react";
export const AdminsPage: FC<{}> = ({}) => {
  return (
    <Stack gap={1}>
      <FilterRow>
        <Grid item xs={8} sm={6} md={4} lg={3}>
          <SearchFilter />
        </Grid>
      </FilterRow>
      <AdminsTable />
      <AddFab />
      <AdminAddForm />
      <AdminEditForm />
      <AdminRemoveForm />
    </Stack>
  );
};
