import { Stack } from "@mui/material";
import { Bar, Details, Line, Pie } from "features/home";
export default function HomePage() {
  return (
    <Stack gap={1}>
      <Details />
      <Stack direction={{ md: "row" }} mt={5}>
        <Bar />
        <Pie />
      </Stack>
      <Line />
    </Stack>
  );
}
