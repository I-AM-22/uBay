import PendingIcon from "@mui/icons-material/Pending";
import WalletIcon from "@mui/icons-material/Wallet";
import { Paper, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Skeleton from "components/feedback/Skeleton";
import LabelValue from "components/typography/LabelValue";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { priceFormatter } from "utils/transforms";
import { accountQueries } from "..";
export type WalletProps = {};
export const WalletDisplay: FC<WalletProps> = ({}) => {
  const query = accountQueries.useProfile();
  const { t } = useTranslation("account", { keyPrefix: "profile" });
  const isSmOrMore = useMediaQuery(useTheme().breakpoints.up("sm"));
  return (
    <Paper
      elevation={isSmOrMore ? 1 : 0}
      sx={{
        mx: "auto",
        width: { xs: 1, sm: 600 },
        mt: { xs: 0, sm: 2 },
        borderRadius: { xs: 0, sm: 4 },
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Stack
        gap={2}
        p={3}
        sx={{
          ".label": {
            color: "primary.main",
            svg: { fill: (th) => th.palette.primary.main },
            minWidth: 0.27,
            ".MuiStack-root": {
              flexDirection: "row",
              gap: 1,
            },
          },
          ".value": {
            color: "secondary.main",
          },
        }}
      >
        <LabelValue
          label={
            <Stack>
              <WalletIcon />
              {t("available")}
            </Stack>
          }
          noColon
        >
          <Typography>
            {query.isLoading && <Skeleton widthRange={{ min: 40, max: 60 }} />}
            {query.isSuccess && priceFormatter.format(query.data.wallet.available)}
          </Typography>
        </LabelValue>
        <LabelValue
          label={
            <Stack>
              <PendingIcon />
              {t("pending")}
            </Stack>
          }
          noColon
        >
          <Typography>
            {query.isLoading && <Skeleton widthRange={{ min: 40, max: 60 }} />}
            {query.isSuccess && priceFormatter.format(query.data.wallet.pending)}
          </Typography>
        </LabelValue>
      </Stack>
    </Paper>
  );
};
