import { Box, Stack, Theme, useMediaQuery } from "@mui/material";
import { Pie } from "features/home/pie/Pie";
import { Bar } from "features/home/bar/Bar";
import Details from "features/home/Details";
export default function Home() {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down(500)
  );
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
