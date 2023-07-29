import { Box, Stack, Typography } from "@mui/material";
type homeProps = {
  icon: any;
  title: string;
  count: string;
};
export default function HomeCard({ icon, title, count }: homeProps) {
  return (
    <Box>
      <Stack
        sx={{
          bgcolor: "white",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          gap: 1,
          borderRadius: 1,
          width: 220,
          paddingTop: 1,
          paddingBottom: 1,
        }}
      >
        {icon}
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1">{count}</Typography>
      </Stack>
    </Box>
  );
}
