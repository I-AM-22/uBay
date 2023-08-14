import { Box, Stack, Theme, useMediaQuery } from "@mui/material";
import { Bar, Details, Pie } from "features/home";
export default function HomePage() {
  return (
    <Box>
      <Details />
      <Stack direction={{ md: "row" }} mt={5}>
        <Bar />
        <Pie />
      </Stack>
    </Box>
  );
}
