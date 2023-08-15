import { Stack } from "@mui/material";
import Layout from "../Layout";

function SellChat() {
  return (
    <Stack gap={1} p={1} maxWidth={600} width="min(500px,100%)" mx="auto" alignItems={"center"}>
      <Layout person={false} />
    </Stack>
  );
}
export default SellChat;
