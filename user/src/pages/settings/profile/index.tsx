import { Stack } from "@mui/material";
import { ProfileBasicInformation } from "features/account";
import { FC } from "react";
export type ProfilePageProps = {};
export const ProfilePage: FC<ProfilePageProps> = ({}) => {
  return (
    <Stack sx={{ flex: 1, bgcolor: { xs: "background.paper", sm: "transparent" } }}>
      <ProfileBasicInformation />
      <Stack alignItems={"center"} m={4}>
        حاليا بس هيك بدنا داتا اكتر من الباكاند
      </Stack>
    </Stack>
  );
};
