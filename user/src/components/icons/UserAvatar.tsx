import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Avatar, AvatarProps, Skeleton } from "@mui/material";
import { FC } from "react";
export type UserAvatarProps = AvatarProps & { src: string | undefined } & {
  isLoading?: boolean;
  isError?: boolean;
};
export const UserAvatar: FC<UserAvatarProps> = ({ src, isLoading, isError, ...props }) => {
  return (
    <>
      {src !== undefined && (
        <Avatar
          src={src}
          {...props}
          sx={{ bgcolor: "white", width: 30, height: 30, ...props.sx }}
        />
      )}
      {isLoading && <Skeleton variant="circular" sx={{ width: 30, height: 30, ...props.sx }} />}
      {isError && <AccountCircleRoundedIcon sx={props.sx} />}
    </>
  );
};
