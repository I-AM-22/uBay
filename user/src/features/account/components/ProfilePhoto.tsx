import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Box, BoxProps, Skeleton } from "@mui/material";
import { FC } from "react";
import { accountQueries } from "..";
export type ProfilePhotoProps = BoxProps & { src?: string };
export const ProfilePhoto: FC<ProfilePhotoProps> = ({ src, ...props }) => {
  const query = accountQueries.useProfile();
  return (
    <>
      {(query.isSuccess || src !== undefined) && (
        <Box
          component={"img"}
          src={src ?? query.data?.photo}
          {...props}
          sx={{ borderRadius: "50%", bgcolor: "white", width: 30, height: 30, ...props.sx }}
        />
      )}
      {query.isInitialLoading && (
        <Skeleton variant="circular" sx={{ width: 30, height: 30, ...props.sx }} />
      )}
      {query.isError && <AccountCircleRoundedIcon sx={props.sx} />}
    </>
  );
};
