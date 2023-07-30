import { Box, Stack, Theme, useMediaQuery } from "@mui/material";
import { Bar, Details, Pie } from "features/home";
export default function HomePage() {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down(500));
  return (
    <Box>
      <Details />
      <Stack direction={{ md: "row" }} mt={5}>
        <Bar />
        <Pie isSmallScreen={isSmallScreen} />
      </Stack>
    </Box>
  );
}
