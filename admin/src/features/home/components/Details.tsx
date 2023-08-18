import BadgeIcon from "@mui/icons-material/Badge";
import PersonIcon from "@mui/icons-material/Person";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import WebIcon from "@mui/icons-material/Web";
import { Stack } from "@mui/material";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { homeQueries } from "..";
import { CountCard } from "./CountCard";
export default function Details() {
  const { t } = useTranslation("home");
  const query = homeQueries.useStatics();
  const dataCard = useMemo(
    () => [
      {
        icon: <WebIcon sx={{ fill: "#F47560" }} />,
        label: t("products"),
        count: query.data?.products ?? undefined,
        fadedLabel: t("soldProducts"),
        fadedCount: query.data?.soldProducts ?? undefined,
      },

      {
        icon: <PersonIcon sx={{ fill: "#E8A838" }} />,
        label: t("users"),
        count: query.data?.users ?? undefined,
      },
      {
        icon: <WarehouseIcon sx={{ fill: "#be185d" }} />,
        label: t("warehouses"),
        count: query.data?.stores ?? undefined,
      },
      {
        icon: <BadgeIcon sx={{ fill: "#61CDBB" }} />,
        label: t("employees"),
        count: query.data?.employees ?? undefined,
      },
    ],
    [query, t]
  );
  return (
    <Stack
      sx={{
        gap: 2,
        width: 1,
        ">*": { flex: { xs: "100%", md: "45%", lg: 1 } },
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {dataCard.map((card, i) => (
        <CountCard key={card.label} index={i} {...card} />
      ))}
    </Stack>
  );
}
