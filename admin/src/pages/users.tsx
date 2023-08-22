import { Grid, Stack } from "@mui/material";
import SearchFilter from "components/inputs/SearchFilter";
import FilterRow from "components/layout/FilterRow";
import { DepositDialog, User, UserDetails, UserRemoveForm, UsersTable } from "features/user";
import { FC, useState } from "react";
export const UsersPage: FC<{}> = ({}) => {
  const [userToDeposit, setUserToDeposit] = useState<User | null>(null);
  return (
    <Stack gap={1}>
      <FilterRow>
        <Grid item xs={8} sm={6} md={4} lg={3}>
          <SearchFilter />
        </Grid>
      </FilterRow>
      <UsersTable setUserToDeposit={setUserToDeposit} />
      <UserDetails />
      <UserRemoveForm />
      <DepositDialog
        key={userToDeposit?.id ?? ""}
        user={userToDeposit}
        onClose={() => setUserToDeposit(null)}
      />
    </Stack>
  );
};
