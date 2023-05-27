import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Box, BoxProps, Skeleton } from "@mui/material";
import { FC } from "react";
import { accountQueries } from "..";
export type ProfilePhotoProps = BoxProps;
export const ProfilePhoto: FC<ProfilePhotoProps> = (props) => {
  const query = accountQueries.useProfile();
  return (
    <>
      {query.isSuccess && (
        <Box
          component={"img"}
          src={query.data.photo}
          {...props}
          sx={{ borderRadius: "50%", width: 30, height: 30, ...props.sx }}
        />
      )}
      {query.isInitialLoading && (
        <Skeleton variant="circular" sx={{ width: 30, height: 30, ...props.sx }} />
      )}
      {query.isError && <AccountCircleRoundedIcon sx={props.sx} />}
    </>
  );
};
