import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Box, BoxProps } from "@mui/material";
import { useProfile } from "context/profileContext";
import { FC } from "react";
export type ProfilePhotoProps = BoxProps;
export const ProfilePhoto: FC<ProfilePhotoProps> = (props) => {
  const [profile] = useProfile();
  return profile ? (
    <Box component={"img"} src={profile.photo} {...props} />
  ) : (
    <AccountCircleRoundedIcon sx={props.sx} />
  );
};
