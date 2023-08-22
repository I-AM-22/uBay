import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import AppBarChat from "./AppBar";

export default function Chat() {
  const theme = useTheme();
  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));
  const { t } = useTranslation("chat");
  return (
    <Stack flex={1} direction={"row"} bgcolor={"white"}>
      <AppBarChat />
      {isMdOrLarger && (
        <Stack flex={2.5} gap={3} justifyContent={"center"} mt={-14} alignItems={"center"} pt={6}>
          <MapsUgcIcon sx={{ fontSize: 200 }} />
          <Typography variant="h6">{t("startChat")}</Typography>
        </Stack>
      )}
    </Stack>
  );
}
