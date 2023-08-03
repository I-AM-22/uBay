import { Avatar, Box, Stack, Typography } from "@mui/material";

const UserInformation = () => {
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
      }}
    >
      <Avatar>A</Avatar>
      <Typography
        variant="h6"
        margin="0 12px"
        width="fit-content"
        color="black"
      >
        عمرو
      </Typography>
    </Stack>
  );
};

export default UserInformation;
