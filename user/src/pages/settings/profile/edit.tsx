import { Stack } from "@mui/material";
import { ProfileEditForm, accountQueries } from "features/account";
import { FC } from "react";
export type ProfileEditPageProps = {};
export const ProfileEditPage: FC<ProfileEditPageProps> = ({}) => {
  const query = accountQueries.useProfile();
  return (
    <Stack sx={{ flex: 1, bgcolor: { xs: "background.paper", sm: "transparent" } }}>
      <ProfileEditForm initial={query.data} key={query.status} />
    </Stack>
  );
};
