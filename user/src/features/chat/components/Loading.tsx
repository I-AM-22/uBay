import { Box, Skeleton, Stack } from "@mui/material";
const Loading = () => {
  return (
    <Stack
      direction="row"
      sx={{
        padding: "6px 16px",
        width: 1,
        height: 90,
        alignItems: "center",
      }}
    >
      <Skeleton variant="circular" width={40} height={40} />
      <Box mx={1}>
        <Skeleton variant="text" width={70} />
        <Skeleton variant="text" width={100} />
      </Box>
    </Stack>
  );
};

export default Loading;
