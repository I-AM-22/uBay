import { Stack } from "@mui/material";
import Layout from "../Layout";

export default function BuyChat() {
  return (
    <Stack gap={1} p={1} maxWidth={600} width="min(500px,100%)" mx="auto" alignItems={"center"}>
      <Layout person={true} />
    </Stack>
  );
}
