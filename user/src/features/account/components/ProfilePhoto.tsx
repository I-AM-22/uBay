import { AvatarProps } from "@mui/material";
import { UserAvatar } from "components/icons/UserAvatar";
import { FC } from "react";
import { accountQueries } from "..";
export type ProfilePhotoProps = AvatarProps & { src?: string };
export const ProfilePhoto: FC<ProfilePhotoProps> = ({ src, ...props }) => {
  const query = accountQueries.useProfile();
  return (
    <UserAvatar
      isLoading={query.isLoading}
      isError={query.isError}
      src={src ?? query.data?.photo}
      {...props}
    />
  );
};
