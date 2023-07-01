import { Grid, Stack } from "@mui/material";
import AddFab from "components/buttons/AddFab";
import SearchFilter from "components/inputs/SearchFilter";
import FilterRow from "components/layout/FilterRow";
import {
  EmployeeAddForm,
  EmployeeDetailsDialog,
  EmployeeEditForm,
  EmployeeRemoveForm,
  EmployeeTable,
} from "features/employee";
import { FC } from "react";
export const EmployeesPage: FC<{}> = ({}) => {
  return (
    <Stack gap={1}>
      <FilterRow>
        <Grid item xs={8} sm={6} md={4} lg={3}>
          <SearchFilter />
        </Grid>
      </FilterRow>
      <EmployeeTable />
      <AddFab />
      <EmployeeDetailsDialog />
      <EmployeeAddForm />
      <EmployeeEditForm />
      <EmployeeRemoveForm />
    </Stack>
  );
};
